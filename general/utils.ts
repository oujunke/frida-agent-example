import {log,info} from './logger.js'
import{fromByteArray} from "./base64.js"
/**
 * 最大显示字节
 */
var maxShowByte=0x400;
/**
 * 使用Log记录字节数据
 * @param dataPointer 字节数据指针
 * @param length 字节数据长度
 * @param head 日记头
 * @param log 日记字符串
 * @returns 
 */
function logLengthData(dataPointer:NativePointer,length:number,head:string,log:string):string
{
    var suffix="";
    if(length>maxShowByte){
        suffix=`\r\n省略以下${length-maxShowByte}字节`;
        length=maxShowByte;
    }
    if(length==0||dataPointer.toUInt32()==0){
        log+=`${head} length:${length} 字符串为空\r\n`;
        return log;
    }
    var da=dataPointer.readByteArray(length);
    if(da==null){
        log+=`${head} length:${length} 字符串为空\r\n`;
    }else{
        log+=`${head} length:${length} \r\nbase64:${base64FromByteArray(new Uint8Array(da))} \r\nstr:\r\n${hexdump(da)}${suffix}\r\n`;
    }
    return log;
}
function bytesToHex(bs:any) {  
    return Array.from(bs, (byte:any) => ('0' + byte.toString(16)).slice(-2)).join(' ');  
  }  
/**
 * 使用Log记录字节数据
 * @param dataPointer 字节数据指针
 * @param lengthPointer 字节数据长度指针
 * @param head 日记头
 * @param log 日记字符串
 * @returns 
 */
function logData(dataPointer:NativePointer,lengthPointer:NativePointer,head:string,log:string):string
{
    var length=lengthPointer.toUInt32();
    return logLengthData(dataPointer,length,head,log);
}
/**
 * 使用Log记录结构中的字节数据
 * @param sourcePointer 结构指针
 * @param lengthNp 长度偏移
 * @param dataNp 数据偏移
 * @param head 日记头
 * @param log 日记字符串
 * @returns 
 */
function logOffsetData(sourcePointer:NativePointer,lengthNp:number,dataNp:number,head:string,log:string):string
{
    var length=sourcePointer.add(lengthNp).readInt();
    if(length<0){
        length=sourcePointer.add(lengthNp).readU32();
    }
    var suffix="";
    if(length>maxShowByte){
        suffix=`\r\n省略以下${length-maxShowByte}字节`;
        length=maxShowByte;
    }
    var da=sourcePointer.add(dataNp).readByteArray(length);
    if(da!=null){
        log+=`${head} length:${length} \r\nbase64:${base64FromByteArray(da)} \r\nstr:\r\n${hexdump(da)}${suffix}\r\n`;
    }
    return log;
}
/**
 * 捕获异常
 */
function exceptionHandler(){
    Process.setExceptionHandler(function(details){
        console.log("捕获异常:Process.setExceptionHandler:-type:",details.type,
        "-address:",details.address,
        "-memory operation:"
        ,details.memory?.operation,"-memory address:",details.memory?.address,
        "-context.pc:",details.context.pc,"-context.sp:",details.context.sp,
        "-nativeContext:",details.nativeContext
    );
        return false;
       }
    );
}

/**
 * 打印多的堆栈信息
 * @param obj 
 */
function getFullNativeTrace(obj:InvocationContext ){
    var dss=Thread.backtrace(obj.context, Backtracer.ACCURATE);
    var str='RegisterNatives full called from:\r\n\t';
    for (let index = 0; index < dss.length; index++) {
        const as1 = dss[index];
        const element=DebugSymbol.fromAddress(as1);
        var codeBs:any=as1.readByteArray(32);
        if(codeBs!=null){
            codeBs=new Uint8Array(codeBs);
        }
        str+=`as1:${as1},name:${element.name},moduleName:${element.moduleName},address:${element.address},fileName:${element.fileName}
        ,lineNumber:${element.lineNumber},CodeBase64:${base64FromByteArray(codeBs)},CodeHex:${bytesToHex(codeBs)}\r\n\t`;
    }
    return str+'\r\n';

}
function hookModuleAllExports(name :string){
    var module=Process.getModuleByName(name);
    if(module==null){
        info("当前Module不存在");
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
function logAllX(c:any,l:string):string{
    for(let i=0;i<29;i++){
        l+=`x${i}:${c['x'+i]}-`;
    }
    return l;
}
/**
 * 通用Hook C++方法
 * @param libdemoBase hook库文件基址
 * @param add 方法指针
 * @param label Log标签
 * @param callback 回调函数
 */
function hookFunc(libdemoBase:Module,add:number,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext, log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener{
    const hookAddress = libdemoBase.base.add(add);
    var ins=Interceptor.attach(hookAddress, {
        onEnter: function (args) {
            if(isIgnore&&isIgnore.apply(this)){
                return;
            }
            let contextArm=this.context as  Arm64CpuContext;
            let log=`entered HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
            try{
                log+=`\r\n\t${logAllX(contextArm,log)}\r\n`;
                log=callback.apply(this,[contextArm,log]);
            }catch(ex:any){
                log+=`\r\nThrowException:${ex.message}`;
            }
            log+=`\r\n${getFullNativeTrace(this)}\r\nexiting HookFunc ${add.toString(16)}-${label};`;
            console.log(log);
        },
        onLeave: function (retval) {
            if(isIgnore&&isIgnore.apply(this)){
                return;
            }
            if(leaveCallback!=null){
                let contextArm=this.context as  Arm64CpuContext;
                let log=`entered Leave HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
                try{
                    log+=`\r\n\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}\r\n`;
                    log=leaveCallback.apply(this,[contextArm,log]);
                }catch(ex:any){
                    log+=`\r\nThrowException:${ex.message}`;
                }
                log+=`\r\nexiting Leave HookFunc ${add.toString(16)}-${label};`;
                console.log(log);
            }
        }
    });
    return ins;
}
/**
 * 通用Hook C++方法
 * @param libdemoBase hook库文件基址
 * @param add 方法指针
 * @param label Log标签
 * @param callback 回调函数
 */
 function hookFuncArgs(libdemoBase:Module,add:number,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext,args: InvocationArguments, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext, log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener{
        return hookFuncAddressArgs(libdemoBase.base,add,label,callback,leaveCallback,isIgnore);
    }
/**
 * 通用Hook C++方法
 * @param libdemoBase hook库文件基址
 * @param add 方法指针
 * @param label Log标签
 * @param callback 回调函数
 */
export function hookFuncAddressArgs(baseAddress:NativePointer,add:number,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext,args: InvocationArguments, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext, log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener{
    const hookAddress = baseAddress.add(add);
    var ins=Interceptor.attach(hookAddress, {
        onEnter: function (args) {
            if(isIgnore&&isIgnore.apply(this)){
                return;
            }
            let contextArm=this.context as  Arm64CpuContext;
            let log=`entered HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
            try{
                log+=`\r\n\t${logAllX(contextArm,log)}\r\n`;
                log=callback.apply(this,[contextArm,args,log]);
            }catch(ex:any){
                log+=`\r\nThrowException:${ex.message}`;
            }
            log+=`\r\n${getFullNativeTrace(this)}\r\nexiting HookFunc ${add.toString(16)}-${label};`;
            console.log(log);
        },
        onLeave: function (retval) {
            if(isIgnore&&isIgnore.apply(this)){
                return;
            }
            if(leaveCallback!=null){
                let contextArm=this.context as  Arm64CpuContext;
                let log=`entered Leave HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
                try{
                    log+=`\r\n\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}\r\n`;
                    log=leaveCallback.apply(this,[contextArm,log]);
                }catch(ex:any){
                    log+=`\r\nThrowException:${ex.message}`;
                }
                log+=`\r\nexiting Leave HookFunc ${add.toString(16)}-${label};`;
                console.log(log);
            }
        }
    });
    return ins;
}
function hookFuncByName(moduleName:string,funcName:string,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext, log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener|null{
    var module=Process.getModuleByName(moduleName);
    if(module==null){
        info("当前Module不存在");
        return null;
    }
    var fun=module.findExportByName(funcName);
    if(fun==null){
        info("当前fun不存在");
        return null;
    }
    return hookFunc(module,fun.sub(module.base).toInt32(),label,callback,leaveCallback,isIgnore);
}
export function hookFuncArgsByAddress(moduleName:string,add:number,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext,args: InvocationArguments, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext,log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener|null{
    var module=Process.getModuleByName(moduleName);
    if(module==null){
        info("当前Module不存在");
        return null;
    }
    info(`Module:${moduleName}地址:${module.base}-add:${add.toString(16)}-hookAdd:${module.base.add(add)}`);
    //return null;
    return hookFuncArgs(module,add,label,callback,leaveCallback,isIgnore);
}
function hookFuncArgsByName(moduleName:string,funcName:string,label:string,
    callback: (this: InvocationContext,context: Arm64CpuContext,args: InvocationArguments, log: string) => string,
    leaveCallback: ((this: InvocationContext,context: Arm64CpuContext,log: string) => string)|null=null
    ,isIgnore:((this: InvocationContext)=>boolean)|null=null):InvocationListener|null{
    var module=Process.getModuleByName(moduleName);
    if(module==null){
        info("当前Module不存在");
        return null;
    }
    var fun=module.findExportByName(funcName);
    if(fun==null){
        info("当前fun不存在");
        return null;
    }
    return hookFuncArgs(module,fun.sub(module.base).toInt32(),label,callback,leaveCallback,isIgnore);
}
export function base64FromByteArray(bs:any):string{
    return fromByteArray(bs)
}
export function setMaxShowByte(maxNum:number){
    maxShowByte=maxNum;
}
export {exceptionHandler,logLengthData,logData,logOffsetData,hookFunc,hookFuncArgs,hookFuncByName,hookFuncArgsByName}