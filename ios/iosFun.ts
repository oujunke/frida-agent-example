import {SSLHandshake} from './pinning/SSLHandshake.js'
import {sslDisable} from './pinning/ssl_pinning.js'
import {tlsDisable} from './pinning/tls_pinning.js'
import {bypassSSL} from './pinning/tls_12_pinning.js'
import {catchCertificates} from './pinning/universal_pinning.js'
import {disablePinning} from './pinning/boringssl_pinning.js'
import { hook } from "./hooks/hooking.js";
import { hook as reqHook } from "./NSURLRequest.js";
import { hook as printClassHook } from "./hooks/trace_class.js";
import { hook as printMethodHook } from "./hooks/trace_method.js";
import{info} from '../general/logger.js'
import { hookFuncByName,hookFuncAddressArgs,hookFuncArgsByName,exceptionHandler, hookFunc,hookFuncArgs,logData,logLengthData,logOffsetData,setMaxShowByte} from "../general/utils.js";
import {dumpModule} from './dump.js'
/**
 * 关闭ssl校验
 */
function disableSsl(){
    //sslDisable();
    //tlsDisable();
    //bypassSSL();
    //catchCertificates();
    //SSLHandshake();
    disablePinning();
}
/**
 * Hook url请求
 */
function hookUrlRequest(){
    reqHook();
}
/**
 * Hook指定的ios类的方法,为空默认为所有
 * @param search_class 
 * @param search_method 
 */
function hookClassMethod(search_class:string[],search_method:string[]|null=null){
    hook(search_class,search_method);
}
/**
 * 打印ios类(没有包含字符时输出所有)
 * @param search_class 
 */
function printClass(search_class:string[]|null=null){
    printClassHook(search_class);
}
/**
 * 打印ios类的方法(没有包含字符时输出所有)
 * @param search_class 
 * @param search_method 
 */
function printMethod(search_class:string[]|null=null,search_method:string[]|null=null){
    //ObjC.api.
    printMethodHook(search_class,search_method);
}
export function printModules(){
    var modules=Process.enumerateModules();
    for (let index = 0; index < modules.length; index++) {
        const element = modules[index];
        console.log(`name:${element.name}-path:${element.path}-size:${element.size}-base:${element.base}-end:${element.base.add(element.size)}`);
    }
}
export function printModuleAllExports(name:string){
    var module=Process.getModuleByName(name);
    if(module==null){
        info("当前Module不存在");
        return;
    }
    var exports=module.enumerateExports();
    for (let index = 0; index < exports.length; index++) {
        const element = exports[index];
        console.log(`name:${element.name}-type:${element.type}-address:${element.address}`);
    }
}
export function printModuleAllSymbol(name:string){
    var module=Process.getModuleByName(name);
    if(module==null){
        info("当前Module不存在");
        return;
    }
    var symbols=module.enumerateSymbols();
    for (let index = 0; index < symbols.length; index++) {
        const element = symbols[index];
        console.log(`name:${element.name}-type:${element.type}-address:${element.address}`);
    }
}
export function toObjectCString(handle: NativePointer):string{
    var obj=new ObjC.Object(handle);
    return `${obj.$moduleName}:${obj.$className}:${obj}`;
}
export function hookFuncArgsByClassMenth(className:string,methodName:string,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext,args: InvocationArguments, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext, log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener|null{
    var cls=ObjC.classes[className];
    if(cls==null){
        info("当前cls不存在");
        return null;
    }
    var methods=cls.$ownMethods;
    var fun:any=null;
    for (var i = 0; i < methods.length; i++){
        if (methods[i].toLowerCase().includes(methodName.toLowerCase())) {
            //info(`当前匹配fun:${methods[i]}-${methodName}`);
            fun=methods[i];
        }else{
            //info(`当前不匹配fun:${methods[i]}-${methodName}`);
        }
    }
    if(fun==null){
        info("当前fun不存在");
        return null;
    }
    var add=cls[fun].implementation;
    var module=Process.getModuleByAddress(add);
    return hookFuncArgs(module,add.sub(module.base).toInt32(),label,callback,leaveCallback,isIgnore);
}
export {exceptionHandler,hookFuncArgs,hookFuncArgsByName,disableSsl,dumpModule,hookUrlRequest,hookClassMethod,printClass,printMethod,hookFuncByName,setMaxShowByte, hookFunc,logData,logLengthData,logOffsetData}
