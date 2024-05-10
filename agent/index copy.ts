import { log,info } from "./logger.js";
import {printModuleName,dumpModule} from "./dumpModule.js"
import {getFullNativeTrace} from "./utils.js"
import {findRegisterNatives} from "./findRegisterNatives.js"
import {trace,traceClass,traceMethod,traceModule} from "./traceAllClass.js"
//import { start } from "./hookHttp.js";
import { cwd } from "process";
import { debug } from "util";
//printModuleName();
//dumpModule("libwhatsapp.so","com.whatsapp")
//hook http参数加密
function test1(){
    Java.perform(function () {
        //printModuleName();
        const libdemoBase = Process.findModuleByName("libwhatsapp.so");
        if (!libdemoBase) {
        throw new Error('libwhatsapp.so not found');
        }
        try{
            // 计算 Hook 地址
            //抓取http加密报文
            //const hookAddress = libdemoBase.base.add(0x35021C);
            const hookAddress = libdemoBase.base.add(0x847F48);
            console.log("1")
            // 附加一个 Hook 到指定地址
            Interceptor.attach(hookAddress, {
            onEnter: function (args) {
                console.log("2")
                let contextArm=this.context as  Arm64CpuContext;
                const jstringAddress = contextArm.x7;
                let arg="";
                // for (let index = 0; index < args.length; index++) {
                //     const element = args[index];
                //     arg+="args"+index+":"+element;
                // }
                //arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
                //console.log(arg);
                //console.log(`3A1490 :a4 =${contextArm.x3.add(40).readPointer().readUtf8String()}`);
                //,a4=${contextArm.x4.readU32()},a5=${contextArm.x5.readU32()},a6=${contextArm.x6.readU32()},a7=${contextArm.x7.readU32()},a8=${contextArm.x8.readU32()}
                //console.log("args8: " + args[8],"\tx7:"+jstringAddress,"res:"+this.returnAddress);
                var stringAtAddress = jstringAddress.readUtf8String();
                console.log("String  at address: " + stringAtAddress+"\r\n"+getFullNativeTrace(this));
            },
            onLeave: function (retval) {
            }
            });
        }catch(err:any) {
            console.log(err);
        }
    });
    console.log("end");
    
}
function testCpp(){
    Java.perform(function () {
        //printModuleName();
        const libdemoBase = Process.findModuleByName("libwhatsapp.so");
        if (!libdemoBase) {
        throw new Error('libwhatsapp.so not found');
        }
        try{
            //hookCppAdd(libdemoBase,0x320E98);
            //hookCppAdd(libdemoBase,0x7EFFEC);
            //hookCppAdd(libdemoBase,0x3399E8);
            //hookCppAdd(libdemoBase,0x847F48);
            // hookCppAdd(libdemoBase,0x3364D0);
            // hookCppAdd(libdemoBase,0x78D490);
            // hookCppAdd(libdemoBase,0x32B984);
            // hookCppAdd(libdemoBase,0x321CB0);
            // hookCppAdd(libdemoBase,0x32CB28);
            // hookCppAdd(libdemoBase,0x321194);
            // hookCppAdd(libdemoBase,0x32BB38);
            //hookJString(libdemoBase,0x33AA84);
            // hookTemp1(libdemoBase,0x33AA84);
            // hookTemp1(libdemoBase,0x809EEC);
            // hookTemp1(libdemoBase,0x2C6FE4);
            // hookTemp1(libdemoBase,0x33D438);
            hookTemp1(libdemoBase,0x7ECF10);
            hookTemp1(libdemoBase,0x7ED208);
            hookTemp1(libdemoBase,0x80C858);
            //hookTemp1(libdemoBase,0x80C8E4);
            hook80C8E4(libdemoBase);
            hookTemp1(libdemoBase,0x813E80);
            hookTemp1(libdemoBase,0x76F650);
            hook3357C4(libdemoBase,0x3357C4);
            hook843BC8(libdemoBase);
            hook33D438(libdemoBase);
        }catch(err:any) {
            console.log(err);
        }
    });
    console.log("end");
}
function hook80C8E4(libdemoBase:Module){
    var add=0x80C8E4;
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        let arg="";//+args.length;
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        var da=contextArm.x1.readByteArray(contextArm.x2.toUInt32());
        if(da!=null){
            console.log(`x1 str:${hexdump(da)}`);
        }
        console.log("hook80C8E4:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function hook843BC8(libdemoBase:Module){
    var add=0x843BC8;
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        let arg="";//+args.length;
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        var da=contextArm.x1.readByteArray(contextArm.x2.toUInt32());
        if(da!=null){
            console.log(`x0 str:${hexdump(da)}`);
        }
        console.log("hook843BC8:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function hook33D438(libdemoBase:Module){
    var add=0x33D438;
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        let arg="";//+args.length;
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        var bd=readByteData(contextArm.x0,0x18,0x20);
        if(bd!=null){
            console.log(`x0 str:${hexdump(bd,{
                offset: 0,
                //length: 64,
                header: true,
                ansi: true
            })}`);
        }
        console.log("hook33D438:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function readBackByteData(app:NativePointer,lengthNp:number){
    var length=app.add(lengthNp).readInt();
}
function readByteData(app:NativePointer,lengthNp:number,dataNp:number):ArrayBuffer | null{
    var length=app.add(lengthNp).readInt();
    if(length<0){
        length=app.add(lengthNp).readU32();
    }
    return app.add(dataNp).readByteArray(length);
}
function hook3357C4(libdemoBase:Module,add:number){
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        //const jstringAddress = contextArm.x7;
        let arg="";//+args.length;
        // for (let index = 0; index < args.length; index++) {
        //      const element = args[index];
        //      arg+="args"+index+":"+element;
        // }
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        console.log(`x0 str:${readData2(contextArm.x0,0x20)},x1 str:${readData2(contextArm.x1,0x20)},x2 str:${readData2(contextArm.x2,0x20)}`);
        //console.log(`3A1490 :a4 =${contextArm.x3.add(40).readPointer().readUtf8String()}`);
        //,a4=${contextArm.x4.readU32()},a5=${contextArm.x5.readU32()},a6=${contextArm.x6.readU32()},a7=${contextArm.x7.readU32()},a8=${contextArm.x8.readU32()}
        //console.log("args8: " + args[8],"\tx7:"+jstringAddress,"res:"+this.returnAddress);
        //var stringAtAddress = jstringAddress.readUtf8String();
        //console.log("String  at address: " + stringAtAddress+"\r\n"+getFullNativeTrace(this));
        console.log("hookTemp1:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function hookTemp1(libdemoBase:Module,add:number){
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        //const jstringAddress = contextArm.x7;
        let arg="";//+args.length;
        // for (let index = 0; index < args.length; index++) {
        //      const element = args[index];
        //      arg+="args"+index+":"+element;
        // }
        console.log("hookTemp1:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        console.log(`x0 str:${readData(contextArm.x0)},x1 str:${readData(contextArm.x1)},x2 str:${readData(contextArm.x2)}`);
        //console.log(`3A1490 :a4 =${contextArm.x3.add(40).readPointer().readUtf8String()}`);
        //,a4=${contextArm.x4.readU32()},a5=${contextArm.x5.readU32()},a6=${contextArm.x6.readU32()},a7=${contextArm.x7.readU32()},a8=${contextArm.x8.readU32()}
        //console.log("args8: " + args[8],"\tx7:"+jstringAddress,"res:"+this.returnAddress);
        //var stringAtAddress = jstringAddress.readUtf8String();
        //console.log("String  at address: " + stringAtAddress+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function readData2(add:NativePointer,add1:number){
    try{
        return  add.add(add1).readPointer().readUtf8String();
    }catch{
        try{
            return add.readUtf8String();
            }catch{
            try{
                return add.readAnsiString();
            }catch{
                try{
                    return add.readCString();
                }catch{
                        return add;
                    }
                }
            }
    }
}
function readData(add:NativePointer,index:number=0){
    try{
        return add.readUtf8String();
    }catch{
        try{
            return add.readAnsiString();
        }catch{
            try{
                return add.readCString();
            }catch{
                if(index>=1){
                    return add;
                }else{
                   return readData(add.add(0x20).readPointer(),index+1);
                }
            }
        }
    }
}
function hookJString(libdemoBase:Module,add:number){
    const hookAddress = libdemoBase.base.add(add);
    Interceptor.attach(hookAddress, {
    onEnter: function (args) {
        let contextArm=this.context as  Arm64CpuContext;
        //const jstringAddress = contextArm.x7;
        let arg="";//+args.length;
        // for (let index = 0; index < args.length; index++) {
        //      const element = args[index];
        //      arg+="args"+index+":"+element;
        // }
        arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
        console.log(arg);
        console.log(`x1 str:${contextArm.x1.add(0x20).readPointer().readUtf8String()}`);
        //console.log(`3A1490 :a4 =${contextArm.x3.add(40).readPointer().readUtf8String()}`);
        //,a4=${contextArm.x4.readU32()},a5=${contextArm.x5.readU32()},a6=${contextArm.x6.readU32()},a7=${contextArm.x7.readU32()},a8=${contextArm.x8.readU32()}
        //console.log("args8: " + args[8],"\tx7:"+jstringAddress,"res:"+this.returnAddress);
        //var stringAtAddress = jstringAddress.readUtf8String();
        //console.log("String  at address: " + stringAtAddress+"\r\n"+getFullNativeTrace(this));
        console.log("hookJString:String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
    },
    onLeave: function (retval) {
    }
    });
}
function hookCppAdd(libdemoBase:Module,add:number){
    // 计算 Hook 地址
            //抓取http加密报文
            //const hookAddress = libdemoBase.base.add(0x35021C);
            const hookAddress = libdemoBase.base.add(add);
            console.log("1")
            // 附加一个 Hook 到指定地址
            Interceptor.attach(hookAddress, {
            onEnter: function (args) {
                console.log("2")
                let contextArm=this.context as  Arm64CpuContext;
                //const jstringAddress = contextArm.x7;
                let arg="";//+args.length;
                // for (let index = 0; index < args.length; index++) {
                //      const element = args[index];
                //      arg+="args"+index+":"+element;
                // }
                arg+=`\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}`;
                console.log(arg);
                //console.log(`3A1490 :a4 =${contextArm.x3.add(40).readPointer().readUtf8String()}`);
                //,a4=${contextArm.x4.readU32()},a5=${contextArm.x5.readU32()},a6=${contextArm.x6.readU32()},a7=${contextArm.x7.readU32()},a8=${contextArm.x8.readU32()}
                //console.log("args8: " + args[8],"\tx7:"+jstringAddress,"res:"+this.returnAddress);
                //var stringAtAddress = jstringAddress.readUtf8String();
                //console.log("String  at address: " + stringAtAddress+"\r\n"+getFullNativeTrace(this));
                console.log("String  at address: " + add.toString(16)+"\r\n"+getFullNativeTrace(this));
            },
            onLeave: function (retval) {
            }
            });
}
function test2(){
    Java.perform(function() {
        //trace("X.8I8");
        var array:string[]=[
        //"X.8I6", 
        //"X.8I7", 
        //"X.8I8", 
        //"X.8wR"
        //"X.76Y"//返回gpi
        //"com.whatsapp.registration.integritysignals.GpiaRegClient.calculateGpiaParameter.1"//跟踪gpi
//         'X.8Sa',
// 'X.8ap',
// 'X.8Zn',
// 'X.8ZZ',
// 'X.786',
// 'X.76Y',
// 'X.2sl',
// 'X.1nF'
//'com.whatsapp.registration.integritysignals.GpiaRegClient.fetchTokenBlocking.1',
'com.whatsapp.wamsys.JniBridge',
//"X.389" //A06获取token
//"javax.crypto.Mac",//获取update中Signature，ReDexmd5key
//"javax.crypto.spec.PBEKeySpec.$init",
//"java.security.Key"//获取Key
//"java.io.ByteArrayOutputStream.toByteArray",
//"java.util.HashMap",
"java.util.HashMap.put",
//"java.util.HashMap.putAll",
//"X.3TP"//Bfe 跟踪解封
//"X.3fk",
//"X.3TP.$init"
"com.facebook.msys.mci.Execution",
//"com.facebook.msys.mci.Execution.startExecutorThread"
"java.lang.Thread.$init",
"com.whatsapp.util.Log",
"com.whatsapp.registration.integritysignals.GpiaRegClient"
        ];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            trace(element);
        }
    });
}
function test3(){
    setImmediate(function() {
        Java.perform(function() {
            var targetClass='X.3DR';
            var methodName='A00';
            var str=Java.use("java.lang.String");
            
            var gclass = Java.use(targetClass);
            gclass[methodName].overload('com.facebook.msys.mci.NetworkSession','com.facebook.msys.mci.UrlRequest','java.io.FileInputStream','java.io.OutputStream','java.lang.String','boolean','boolean').implementation = function(arg0:any,arg1:any,arg2:any,arg3:any,arg4:any,arg5:any,arg6:any) {
                console.log('\nGDA[Hook A00(com.facebook.msys.mci.NetworkSession,com.facebook.msys.mci.UrlRequest,java.io.FileInputStream,java.io.OutputStream,java.lang.String,boolean,boolean)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1+'\n\targ2 = '+arg2+'\n\targ3 = '+arg3+'\n\targ4 = '+arg4+'\n\targ5 = '+arg5+'\n\targ6 = '+arg6);
                var i=this[methodName](arg0,arg1,arg2,arg3,arg4,arg5,arg6);
                var body=arg1.getHttpBody();
                console.log("url:"+arg1.getUrl());
                if(body!=null){
                    console.log("data:"+str.$new(body,"UTF-8"));
                }
                console.log('\treturn '+i);
                return i;
            }
        })
        })
}
function test4(){
    Java.perform(function() {
        var hook = Java.use("X.1nY");
        var base64 = Java.use("java.util.Base64");
        var targetMethod="A0A";
        hook[targetMethod].implementation = function() {
			var uW=Java.use("X.2uW");
            var ms=uW.$ownMembers;
            for (let index = 0; index < ms.length; index++) {
                const element = ms[index];
                info(`m:${element}:${uW[element]}`);
            }
            //console.log(`this.A0D:${this.A0D}`);
            //console.log(`A03:${this.A03}`);
            //console.log(`A00:${this.A03.value.A00}`);
            //console.log(`${uW["A00"]}`);
            //console.log(`${uW["A00"].overloads}`);
            //console.log(`this.A0D:${this.A0D}-A00:${uW["A00"].apply(this,this.A03.value.A00.value, this.A0D)}`);
            console.log(`A001:${uW.A00}`);
            console.log(`A002:${uW["A00"]}`);
            console.log(`A001:${this.A03.value.A00}`);
            console.log(`A002:${this.A03.value.A00.value}`);
            console.log(`A0D:${this.A0D}`);
            var a00=uW["A00"];
            var p1=this.A03.value.A00;
            var p2=this.A0D;
            console.log(`a00:${a00}`);
            console.log(`p1:${p1.value}`);
            console.log(`p2:${p2.value}`);
            console.log(`res:${a00(p1,p2.value)}`);
            var retval = this[targetMethod].apply(this, arguments) // rare crash (Frida bug?)
			console.log(`\n$:retval: ${retval}`);
			if(retval!=null){
				//var data=base64.getEncoder().//encodeToString(retval);
                //console.log(`\n$:data: ` + data);
			}
			return retval;
		}
    });
}
function test5(){
    Java.perform(function() {
        var hook = Java.use("X.20g");
        var base64 = Java.use("java.util.Base64");
        var targetMethod="A00";
        hook[targetMethod].implementation = function() {
			if(arguments.length==4){
                console.log(`\n$:url: ${arguments[3].getURL()}`);
            }
            var retval = this[targetMethod].apply(this, arguments) // rare crash (Frida bug?)
			console.log(`\n$:retval: ${retval}`);
			if(retval!=null){
				//var data=base64.getEncoder().//encodeToString(retval);
                //console.log(`\n$:data: ` + data);
			}
			return retval;
		}
    });
}
//获取key和Signature
function getToken(){
    Java.perform(function() {
        var targetClassMethod="javax.crypto.Mac";
        var hook = Java.use(targetClassMethod);
        var base64 = Java.use("java.util.Base64");
        var targetMethod="init";
        var overloadCount = hook[targetMethod].overloads.length;
	    console.log("Tracing " + targetClassMethod + " [" + overloadCount + " overload(s)]");
	    for (var i = 0; i < overloadCount; i++) {
            hook[targetMethod].overloads[i].implementation = function() {
                var retval = this[targetMethod].apply(this, arguments) // rare crash (Frida bug?)
                console.log(`\n$:retval: ${retval}`);
                if(arguments.length>0){
                    console.log(`\n${targetMethod}:arguments[0]: ${base64.getEncoder().encodeToString(arguments[0].getEncoded())}`);
                }
                return retval;
            }
        }
        var targetMethod2="update";
        var overloadCount2 = hook[targetMethod2].overloads.length;
	    console.log("Tracing " + targetMethod2 + " [" + overloadCount2 + " overload(s)]");
	    for (var i = 0; i < overloadCount2; i++) {
            hook[targetMethod2].overloads[i].implementation = function() {
                var retval = this[targetMethod2].apply(this, arguments) // rare crash (Frida bug?)
                console.log(`\n$:retval: ${retval}`);
                if(arguments.length>0){
                    console.log(`\n${targetMethod2}:arguments[0]: ${base64.getEncoder().encodeToString(arguments[0])}`);
                }
                return retval;
            }
        }
    });
}
function test6(){
    //start();
}
setTimeout(function(){
    //findRegisterNatives();
    //test1();
    testCpp();
    test2();
    //test3();
    //test4();
    //test5();
    //getToken();
    //test6();
},2000);