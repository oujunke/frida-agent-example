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
import { hookFuncByName, hookFunc,logData,logLengthData,logOffsetData,setMaxShowByte} from "../general/utils.js";
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
    ObjC.api.
    printMethodHook(search_class,search_method);
}
export function printModules(){
    var modules=Process.enumerateModules();
    for (let index = 0; index < modules.length; index++) {
        const element = modules[index];
        console.log(`name:${element.name}-path:${element.path}-size:${element.size}`);
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
export {disableSsl,hookUrlRequest,hookClassMethod,printClass,printMethod,hookFuncByName,setMaxShowByte, hookFunc,logData,logLengthData,logOffsetData}
