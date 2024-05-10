import { debug,info,error } from "./logger.js";
import {getFullNativeTrace,printMethodInfo,toJson} from "./utils.js"
export{trace,traceClass,traceMethod,traceModule,setEnteredCallback,setExitingCallback}
var enteredCallback:(head:string)=>void|null;
var exitingCallback:(head:string)=>void|null;
function setEnteredCallback(call:(head:string)=>void){
	enteredCallback=call;
}
function setExitingCallback(call:(head:string)=>void){
	exitingCallback=call;
}
// generic trace
function trace(pattern:string)
{
	var type = (pattern.toString().indexOf("!") === -1) ? "java" : "module";

	if (type === "module") {
		debug("Hook Type module");
		// trace Module
		var res = new ApiResolver("module");
		var matches = res.enumerateMatches(pattern);
		var targets = uniqBy(matches, JSON.stringify);
		debug("Hook module num:"+targets.length);
		targets.forEach(function(target:ApiResolverMatch) {
			traceModule(target.address, target.name);
		});

	} else if (type === "java") {
        debug("Hook Type java");
		// trace Java Class
		var found = false;
		Java.enumerateLoadedClasses({
			onMatch: function(aClass:string) {
				if (aClass.match(pattern)) {
					found = true;
					debug("Hook java:"+aClass);
                    var am=aClass.match(/[L](.*);/);
                    if(am!=null&&am.length>=2){
                        var className = am[1].replace(/\//g, ".");
						debug("Hooking java:"+className);
                        traceClass(className);
                    }else{
						debug("Hooking java:"+aClass);
						traceClass(aClass);
					}
				}
			},
			onComplete: function() {}
		});

		// trace Java Method
		if (!found) {
			try {
				debug("Hook No Found:"+pattern);
				traceMethod(pattern);
			}
			catch(err) { // catch non existing classes/methods
				console.error(err);
			}
		}
	}
}

// find and trace all methods declared in a Java Class
function traceClass(targetClass:string)
{
	debug("Hooking class start:"+targetClass+"? ="+(targetClass=="X.8I8"));
	var hook = Java.use(targetClass);
	debug("Hooking class open:"+targetClass);
	var methods = hook.class.getDeclaredMethods();
	hook.$dispose;

	var parsedMethods:string[] = [];
	methods.forEach(function(method:any) {
		parsedMethods.push(method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
	});
	debug("Hooking methods num:"+methods.length);
	var targets = uniqBy(parsedMethods, JSON.stringify);
	targets.forEach(function(targetMethod) {
		traceMethod(targetClass + "." + targetMethod);
	});
}

// trace a specific Java Method
function traceMethod(targetClassMethod:string)
{
	var delim = targetClassMethod.lastIndexOf(".");
	if (delim === -1) return;
	var targetClass = targetClassMethod.slice(0, delim)
	var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length)

	var hook = Java.use(targetClass);
	var overloadCount = hook[targetMethod].overloads.length;
	var base64=Java.use("android.util.Base64");
	console.log("Tracing " + targetClassMethod + " [" + overloadCount + " overload(s)]");

	for (var i = 0; i < overloadCount; i++) {

		hook[targetMethod].overloads[i].implementation = function() {
			var invokeId:string=Math.random().toString(36).slice( - 8);
			var startTime=new Date().getTime();
			try{
				var hashCode=this.hashCode();
			}catch{

			}
			
			console.warn(`\n***${invokeId}-${hashCode}: entered ${targetClassMethod}` );
			// print args
			if (arguments.length) console.log();
			for (var j = 0; j < arguments.length; j++) {
				var jsonObj:string="";
				var baseStr:string=""
				// try{
				// 	jsonObj=toJson(arguments[j]);
					
				// }catch(ex:any){
				// 	error(ex);
				// }
				try{
					baseStr=base64.encodeToString(arguments[j], 2);
				}catch(ex:any){
					//error(ex);
				}
				console.log(`${invokeId}-${hashCode}:arg[${j}]: ${arguments[j]},class:${(arguments[j]?.class)?arguments[j].class.getTypeName():""},json:${jsonObj},base:${baseStr}` );
				//debug(`${arguments[j]}-${arguments[j].class}-${arguments[j].class.getTypeName()}-${arguments[j].class.getname()}`);
			}
			if(enteredCallback!=null){
				enteredCallback(`${invokeId}-${hashCode}: entered`);
			}
			// print retval
			var retval = this[targetMethod].apply(this, arguments); // rare crash (Frida bug?)
			// var file_path = "/data/data/com.whatsapp/temp" +invokeId + ".data";
    		// var file_handle = new File(file_path, "wb");
			// file_handle.write(retval.value);
			// file_handle.flush();
        	// file_handle.close();
			
			if(retval!=null){
				console.log(`\t${invokeId}-${hashCode}:type: ` + retval.class);
				try{
					console.log(`\n${invokeId}-${hashCode}:retval: ` + base64.encodeToString(retval, 2));
				}catch{

				}
			}
			if(exitingCallback!=null){
				exitingCallback(`${invokeId}-${hashCode}: exiting`);
			}
			printMethodInfo(invokeId,startTime,targetClassMethod,hashCode);
			console.warn(`\n***${invokeId}-${hashCode}: exiting ` + targetClassMethod);
			return retval;
		}
	}
}
function classExists(className:string) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};
//查找所有加载的子类
function findOffspringsClasses(parentClassName:string) {
    var radarResults = new Array();
	var parentClass = Java.use(parentClassName);
	debug("parentClass:"+parentClass);
    if (parentClass==null) {
        return radarResults;
    }
	var pcc=parentClass.class;
    var index = 0;
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            try {
				var clazz=Java.use(className);
				 if (clazz!=null&&clazz.$super!=null&&clazz.$super.$className==parentClass.$className) {
					debug("class:"+clazz+"--super:"+clazz.$super);
				 	radarResults.push(className);
				 }
            } catch(err:any) {
                //error(err);
            }

        },
        onComplete: function() {
			debug("enumerateLoadedClasses Ok");
		}
    });
    return radarResults;
};
function traceOffspringsClasses(parentClassName:string){
	var cs=findOffspringsClasses(parentClassName);
	for (let index = 0; index < cs.length; index++) {
		const element = cs[index];
		traceClass(element);
	}
}
// trace Module functions
function traceModule(impl:NativePointerValue, name:string)
{
	console.log("Tracing " + name);
	Interceptor.attach(impl, {
		onEnter: function(args) {
			// debug only the intended calls
			this.flag = true;
			if (this.flag) {
				console.warn("\n*** entered " + name);
				// print backtrace
				console.log("\nBacktrace:\n" + Thread.backtrace(this.context, Backtracer.ACCURATE)
						.map(DebugSymbol.fromAddress).join("\n"));
			}
		},
		onLeave: function(retval) {
			if (this.flag) {
				// print retval
				console.log("\nretval: " + retval);
				console.warn("\n*** exiting " + name);
			}
		}

	});
}

// remove duplicates from array
function uniqBy<T>(array:T[], key:Function)
{
    var seen:Map<any,boolean> = new Map;
    return array.filter(function(item) {
            var k = key(item);
            return seen.has(k) ? false : (seen.set(k,true),true);
    });
}
// trace("com.target.utils.CryptoUtils.decrypt");
// trace("com.target.utils.CryptoUtils");
// trace("CryptoUtils");
// trace(/crypto/i);
// trace("exports:*!open*");