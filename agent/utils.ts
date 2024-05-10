import internal from "stream";

export {soStart,log,toJson,printMethodInfo,getFullNativeTrace,getPreciseNativeTrace,hookModuleAllExports}
/**
 * 统一日记打印
 * @param l 
 */
function log(l :string){
    console.log(l);
}
//虽然我们习惯用fastjson一行将对象转成json字符串，但是Android Library里面自带了一个gson可以做到 只是sdk没有暴露出来，很多人不知道。在frida中所有代码都是透明的，你随便调......
/**
 * 把Java中的对象序列化为Json
 * @param javaObject 
 * @returns 
 */
function toJson(javaObject:any):string {
    var gsonClz = Java.use("com.google.gson.Gson");
    var toJsonMethod = gsonClz.toJson.overload("java.lang.Object");
    return toJsonMethod.call(gsonClz.$new(), javaObject);
};
/**
 * 打印方法信息
 * @param invokeId 当前执行id
    var invokeId = Math.random().toString(36).slice( - 8);
 * @param startTime 进入方法开始时间 var startTime = new Date().getTime();
 * @param methodName 打印方法名称
 * @param hashCode 当前调用对象的hashcode
 */
function printMethodInfo(invokeId :string,startTime :number,methodName :string, hashCode:string) {
	
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+hashCode+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo+"\n";
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	log(str);
};
/**
 * 在so文件加载后立马调用回调函数
 * @param name so文件名
 * @param callback 回调函数
 * @param isLogName 是否打印日记
 */
function soStart(name:string,callback: (t: InvocationContext, r: InvocationReturnValue)=>void,isLogName:boolean=false){
    //第一种方式（针对较老的系统版本）<=android6
    var dlopen = Module.findExportByName(null, "dlopen");
    console.log(dlopen);
    if(dlopen != null){
        Interceptor.attach(dlopen,{
            onEnter: function(args){
                var soName = args[0].readCString();
                if(isLogName)
                    console.log("dlopen:"+soName);
                if(soName!=null&&soName.indexOf(name) != -1){
                    this.hook = true;
                }
            },
            onLeave: function(retval){
                if(this.hook) { 
                    callback(this,retval);
                };
            }
        });
    }

    //第二种方式（针对新系统版本） android 8.1 使用该方法
    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    console.log(android_dlopen_ext);
    if(android_dlopen_ext != null){
        Interceptor.attach(android_dlopen_ext,{
            onEnter: function(args){
                var soName = args[0].readCString();
                if(isLogName)
                    console.log("android_dlopen_ext:"+soName);
                if(soName!=null&&soName.indexOf(name) != -1){
                    this.hook = true;
                }
            },
            onLeave: function(retval){
                if(this.hook) {
                    callback(this,retval);
                };
            }
        });
    }
}
/**
 * 打印尽可能准确的堆栈信息
 * @param obj 
 */
function getPreciseNativeTrace(obj:InvocationContext ){
    return 'RegisterNatives precise called from:\\n' + Thread.backtrace(obj.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n';
}
function printNativeParLog(name :string,obj:InvocationContext,par:InvocationArguments){
    var sb="name:"+name+"\tthreadId:"+obj.threadId+
    "\t参数数量:"+par.length+"\r\n"+getFullNativeTrace(obj);
    console.log(sb);
}
/**
 * 打印多的堆栈信息
 * @param obj 
 */
function getFullNativeTrace(obj:InvocationContext ){
    return 'RegisterNatives full called from:\r\n' + Thread.backtrace(obj.context, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\n\t') + '\r\n';

}
function hookModuleAllExports(name :string){
    var module=Process.getModuleByName(name);
    if(module==null){
        log("当前Module不存在");
        return;
    }
    var exports=module.enumerateExports();
    for (let index = 0; index < exports.length; index++) {
        const element = exports[index];
        Interceptor.attach(element.address,{
            onEnter(args) {
                console.log(getFullNativeTrace(this));
            },
        });
    }
}