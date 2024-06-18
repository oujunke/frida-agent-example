function info(message) {
    console.log("info:"+message);
}
function hookFunc(libdemoBase,add,label,
    callback,
    leaveCallback
    ,isIgnore){
    const hookAddress = libdemoBase.base.add(add);
    var ins=Interceptor.attach(hookAddress, {
        onEnter: function (args) {
            if(isIgnore&&isIgnore.apply(this)){
                return;
            }
            let contextArm=this.context;
            let log=`entered HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
            try{
                log+=`\r\n\t${logAllX(contextArm,log)}\r\n`;
                log=callback.apply(this,[contextArm,log]);
            }catch(ex){
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
                let contextArm=this.context;
                let log=`entered Leave HookFunc ${add.toString(16)}-${label}-${this.threadId}:`;//+args.length;
                try{
                    log+=`\r\n\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}\r\n`;
                    log=leaveCallback.apply(this,[contextArm,log]);
                }catch(ex){
                    log+=`\r\nThrowException:${ex.message}`;
                }
                log+=`\r\nexiting Leave HookFunc ${add.toString(16)}-${label};`;
                console.log(log);
            }
        }
    });
    return ins;
}
function hookFuncByName(moduleName,funcName,label,
    callback,
    leaveCallback
    ,isIgnore){
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
var maxShowByte=0x400;
function logLengthData(dataPointer,length,head,log)
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
var length=0;
hookFuncByName("SharedModules","mbedtls_gcm_update","加密方法:mbedtls_gcm_update",(c,l)=>{
    length=c.x1.toUInt32();
    l=logLengthData(c.x2,length,'input',l);
    return l;
},(c,l)=>{
    l=logLengthData(c.x3,length,'out',l);
    return l;
});