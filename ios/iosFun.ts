import {disable as ssl_disable} from './ssl_pinning.js'
import { hook } from "./hooks/hooking.js";
import { hook as reqHook } from "./NSURLRequest.js";
import { hook as printClassHook } from "./hooks/trace_class.js";
import { hook as printMethodHook } from "./hooks/trace_method.js";
/**
 * 关闭ssl校验
 */
function disableSsl(){
    ssl_disable();
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
    printMethodHook(search_class,search_method);
}
export {disableSsl,hookUrlRequest,hookClassMethod,printClass,printMethod}