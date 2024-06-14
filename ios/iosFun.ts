import {disable as ssl_disable} from './ssl_pinning'
function openFiddler(){
    ssl_disable();
}
const NSURLRequest = require('./NSURLRequest');
/**
 * Hook url请求
 */
function hookUrlRequest(){
    NSURLRequest.hook();
}
const hooking =require("./hooks/hooking");
/**
 * Hook指定的ios类的方法,为空默认为所有
 * @param search_class 
 * @param search_method 
 */
function hookClassMethod(search_class:string[]|null=null,search_method:string[]|null=null){
    hooking.hook(search_class,search_method);
}
const traceClass=require("./hooks/trace_class");
/**
 * 打印ios类(没有包含字符时输出所有)
 * @param search_class 
 */
function printClass(search_class:string[]|null=null){
    traceClass.hook(search_class);
}
const traceMethod=require("./hooks/trace_method");
/**
 * 打印ios类的方法(没有包含字符时输出所有)
 * @param search_class 
 * @param search_method 
 */
function printMethod(search_class:string[]|null=null,search_method:string[]|null=null){
    traceMethod.hook(search_class,search_method);
}
export {openFiddler,hookUrlRequest,printClass,printMethod}