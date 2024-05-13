import { log,info } from "./logger.js";
import {printModuleName,dumpModule} from "./dumpModule.js"
import {getFullNativeTrace,soStart} from "./utils.js"
import {findRegisterNatives} from "./findRegisterNatives.js"
import {trace,traceClass,traceMethod,traceModule,setEnteredCallback,setExitingCallback} from "./traceAllClass.js"
import { start } from "./hookHttp.js";
import { Base64 } from "./base64.js";
//printModuleName();
//dumpModule("libwhatsapp.so","com.whatsapp")
//hook http参数加密
/**
 * hook Enc原始字符串
 */
function EncStr(){
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
function testGpia(libdemoBase:Module){
    var pat7ECB98:any;
    hookFunc(libdemoBase,0x7ECB98,"gpia--复制原文key:enc__sub_7ECB98",(c,l)=>{
        pat7ECB98=c.x0;
        l=logLengthData(c.x0,0x88,"a1内容",l);
        l=logLengthData(c.x1,c.x2.toUInt32(),"a2内容",l);
        return l;
    },(c,l)=>{
        l=logLengthData(pat7ECB98,0x88,"a1内容-原始",l);
        return l;
    });
    var pat850534:any;
    hookFunc(libdemoBase,0x850534,"gpia--复制原文key:enc__sub_850534",(c,l)=>{
        pat850534=c.x0;
        l=logLengthData(c.x0,0x88,"a1内容",l);
        l=logLengthData(c.x1,c.x2.toUInt32(),"a2内容",l);
        l=logLengthData(pat7ECB98,0x88,"a1内容-原始",l);
        return l;
    },(c,l)=>{
        l=logLengthData(pat7ECB98,0x88,"a1内容-原始",l);
        l=logLengthData(pat850534,0x88,"a1内容",l);
        return l;
    });
   
    var pat84FAA8:any;
    var pat84FAA8X1:any;
    hookFunc(libdemoBase,0x84FAA8,"gpia--生成Key:enc__sub_84FAA8",(c,l)=>{
        // var base=Base64.decode("LAAAAAAAAABn5glqha5nu3Lzbjw69U+lf1IOUYxoBZur2YMfGc3gW1I0Nlh6cTFoVmJldVh3T0ZiOGhzaFVOSHJNMlZ1UHhSeWZNYnNaMWNzVnc9gAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAA==");
        // c.x0.writeByteArray(base);
        // c.x1.writeByteArray(Base64.decode("UjQ2WHpxMWhWYmV1WHdPRmI4aHNoVU5Ick0yVnVQeFI="));
        pat84FAA8=c.x0;
        pat84FAA8X1=c.x1;
        l=logLengthData(c.x0,0x88,"a1内容",l);
        l=logLengthData(c.x1,32,"a2内容",l);
        l=logLengthData(pat7ECB98,0x88,"a1内容-原始",l);
        return l;
    },(c,l)=>{
        l=logLengthData(pat7ECB98,0x88,"a1内容-原始",l);
        l=logLengthData(pat850534,0x88,"a1内容",l);
        return l;
    });
    hookFunc(libdemoBase,0x80C800,"gpia--生成Key后",(c,l)=>{
        l=logLengthData(c.x0,32,"加密后key",l);
        return l;
    });
}
var tid:ThreadId;
function hookGpiaKey(libdemoBase:Module){
    var pat85060C1:any;
    var pat85060C2:any;
    var pat84FAA8:any;
    var pat84FAA8X1:any;
    var hk84FAA8:InvocationListener;
    var hk85060C:InvocationListener;
    var hkTest:InvocationListener;
    hookFunc(libdemoBase,0x33D438,"EncryptedAES256CBC加密方法",function(contextArm,l)
        {
            tid=this.threadId;
            hkTest=hookFunc(libdemoBase,0x84FACC,"测试HookCode",(c,l)=>{
                // var base=Base64.decode("LAAAAAAAAABn5glqha5nu3Lzbjw69U+lf1IOUYxoBZur2YMfGc3gW1I0Nlh6cTFoVmJldVh3T0ZiOGhzaFVOSHJNMlZ1UHhSeWZNYnNaMWNzVnc9gAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAA==");
                // c.x0.writeByteArray(base);
                // c.x1.writeByteArray(Base64.decode("UjQ2WHpxMWhWYmV1WHdPRmI4aHNoVU5Ick0yVnVQeFI="));
                l+=`\r\nX9:${c.x9},sp:${c.sp}:sv:${c.x9.sub(c.sp)}--${c.x9.add(-0x1c).readU32().toString(16)}\r\n`;
                return l;
            },null,function(){
                return this.threadId!=tid;
            });
            hk84FAA8=hookFunc(libdemoBase,0x84FAA8,"gpia--转换的方法",(c,l)=>{
                // var base=Base64.decode("LAAAAAAAAABn5glqha5nu3Lzbjw69U+lf1IOUYxoBZur2YMfGc3gW1I0Nlh6cTFoVmJldVh3T0ZiOGhzaFVOSHJNMlZ1UHhSeWZNYnNaMWNzVnc9gAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAA==");
                // c.x0.writeByteArray(base);
                // c.x1.writeByteArray(Base64.decode("UjQ2WHpxMWhWYmV1WHdPRmI4aHNoVU5Ick0yVnVQeFI="));
                pat84FAA8=c.x0;
                pat84FAA8X1=c.x1;
                l=logLengthData(c.x0,0x88,"a1内容",l);
                l=logLengthData(c.x1,32,"a2内容",l);
                return l;
            },(c,l)=>{
                l=logLengthData(pat84FAA8,0x88,"a1内容",l);
                l=logLengthData(pat84FAA8X1,32,"a2内容",l);
                return l;
            },function(){
                return this.threadId!=tid;
            });
            hk85060C=hookFunc(libdemoBase,0x85060C,"gpia--生成Key:enc__sub_85060C",(c,l)=>{
                var base=Base64.decode("LAAAAAAAAABn5glqha5nu3Lzbjw69U+lf1IOUYxoBZur2YMfGc3gW3EwNDI3VUpvMWVvV1VLR2cxZzVUSUNZSVNwTHpPQUswaDgvZFFxWHBGQjg9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==");
                c.x0.writeByteArray(base);
                c.x1.writeByteArray(Base64.decode("AAAAAAAAAAAAAAAAAAAAAAMAIAAAAAAAYAeOUXwAALQ="));
                pat85060C1=c.x0;
                pat85060C2=c.x1;
                l=logLengthData(c.x0,0x70,"a1内容",l);
                l=logLengthData(c.x1,32,"a2内容",l);
                return l;
            },(c,l)=>{
                l=logLengthData(pat85060C1,0x70,"a1内容",l);
                l=logLengthData(pat85060C2,32,"a2内容",l);
                return l;
            },function(){
                return this.threadId!=tid;
            });
            l=logOffsetData(contextArm.x0,0x18,0x20,"x0",l);
            l+=`x1+0x28 NativePointer:${contextArm.x1.add(0x28).toString(16)}`;
            //l=logOffsetData(contextArm.x0,0x18,0x28,"x1",l);
            l=logLengthData(contextArm.x1.add(0x28).readPointer(),contextArm.x1.add(0x18).readU32(),"x1",l);
            //testGpia(libdemoBase);
            return l;
        },(c,l)=>{
            tid=0;
            hk84FAA8.detach();
            hk85060C.detach();
            return l;
        });
    
   
}
function gpia(libdemoBase:Module){
    hookFunc(libdemoBase,0x80C8E4,"处理数据加密的方法",(c,l)=>{
        //l=logOffsetData(c.x0,0x18,0x28,"x0",l);
        l=logLengthData(c.x0.add(0x28).readPointer(),c.x0.add(0x18).readU32(),"x0",l);
        l=logData(c.x1,c.x2,"x1",l);
        return l;
    });
    hookFunc(libdemoBase,0x81423C,"字节数组转Base64",(c,l)=>{
        //l=logOffsetData(c.x0,0x18,0x28,"x0",l);
        l=logLengthData(c.x0.add(0x28).readPointer(),c.x0.add(0x18).readU32(),"x0",l);
        return l;
    });
    hookFunc(libdemoBase,0x843BC8,"设置结构中的字节数据",(c,l)=>logData(c.x1,c.x2,"x1",l));
    hookFunc(libdemoBase,0x3357C4,"gpia数据由C++转Java",(contextArm,l)=>l+=`x0 str:${readData2(contextArm.x0,0x20)}\r\nx1 str:${readData2(contextArm.x1,0x20)}\r\nx2 str:${readData2(contextArm.x2,0x20)}`);
    //hookFunc(libdemoBase,0x7ED068,"设置结构中的字节数据上级方法",(c,l)=>l);
    hookFunc(libdemoBase,0x33D438,"EncryptedAES256CBC加密方法",(contextArm,l)=>
    {
        l=logOffsetData(contextArm.x0,0x18,0x20,"x0",l);
        l+=`x1+0x28 NativePointer:${contextArm.x1.add(0x28).toString(16)}`;
        //l=logOffsetData(contextArm.x0,0x18,0x28,"x1",l);
        l=logLengthData(contextArm.x1.add(0x28).readPointer(),contextArm.x1.add(0x18).readU32(),"x1",l);
        testGpia(libdemoBase);
        return l;
    });
    hookFunc(libdemoBase,0x7F5B0C,"AesEnc加密key,iv",(c,l)=>{
        l=logData(c.x3,c.x4,"key",l);
        l=logData(c.x5,c.x6,"iv",l);
        return l;
    });
    
}
function Enc(libdemoBase:Module){
    hookFunc(libdemoBase,0x7F55D4,"GcmAesCreateEncrypted-GcmAes加密方法:(Enc加密)",(c,l)=>{
        hookFunc(libdemoBase,0x7F5334,"getCurveKey",(c,l)=>{
            l=logByteData(c.x0,"x0",l);
            l=logByteData(c.x1,"x1",l);
            l=logEncData(c.x2,"x2",l);
            return l;
        });
        //l=logOffsetData(c.x0,0x18,0x28,"x0",l);
        l=logEncData(c.x1,"key",l);
        l=logEncData(c.x2,"iv",l);
        l=logEncData(c.x3,"input",l);
        l=logEncData(c.x4,"addData",l);
        return l;
    });
}
function printDevInfo(libdemoBase:Module){
    try{
        var point=libdemoBase.base.add(0x8A5808);
        console.log("DevInfo Point:"+point);
        var pp=point.readPointer();
        console.log("DevInfo Point Point"+pp);
        var ppp=pp.readPointer();
        console.log("DevInfo Point Point Point:"+ppp);
        var p18=pp.add(0x18);
        console.log("DevInfo Point Point+0x18:"+p18);
        var p18p=p18.readPointer();
        console.log("DevInfo Point+0x18 Point:"+p18p);
    }catch(ex:any){
        console.log("DevInfo err:"+ex);
    }
    
}
function testMem(libdemoBase:Module){
    var point=libdemoBase.base.add(0x8A5808);
    MemoryAccessMonitor.enable({base:point,size:8}, {
        onAccess: (details)=>
        {
            var log=`监视AuthEncData内存地址发生操作:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
            console.log(log);
        }
    });
    MemoryAccessMonitor.enable({base:point.readPointer().add(0x18).readPointer(),size:8}, {
        onAccess: (details)=>
        {
            var log=`监视AuthEncData+0x18内存地址发生操作:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
            console.log(log);
        }
    });
}
var isFast=true;
function authorization(libdemoBase:Module){
    printDevInfo(libdemoBase);
    hookFunc(libdemoBase,0x33E35C,"Test创建auth对象",(c,l)=>{
        // try{
        //     MemoryAccessMonitor.enable({base:c.x0.add(0x28),size:4}, {
        //         onAccess: (details)=>
        //         {
        //             var log=`监视Test创建auth对象内存地址发生操作:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
        //             console.log(log);
        //         }
        //     });
        // }catch(ex:any){
        //     var log=`监视Test创建auth对象内存地址发生操作:${ex} `;
        //     console.log(log);
        // }
        // try{
        //     MemoryAccessMonitor.enable({base:c.x0.add(0x28).readPointer(),size:4}, {
        //         onAccess: (details)=>
        //         {
        //             var log=`监视Test创建auth对象内存地址发生操作 Pointer:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
        //             console.log(log);
        //         }
        //     });
        // }catch(ex:any){
        //     var log=`监视Test创建auth对象内存地址发生操作 Pointer:${ex} `;
        //     console.log(log);
        // }
        l=logGDevInfoAuthData(libdemoBase,l);
        l=logEncData(c.x0.add(0x28).readPointer(),"x0:AuthEncData",l);
        l=logByteData(c.x3,"x3:fdid",l);
        printDevInfo(libdemoBase);
        return l;
    });
    // hookFunc(libdemoBase,0x814FD0,"814FD0测试",(c,l)=>{
    //     printDevInfo(libdemoBase);
    //     l=logGDevInfoAuthData(libdemoBase,l);
    //     l=logEncData(c.x3,"x3:AuthEncData",l);
    //     return l;
    // });
    // hookFunc(libdemoBase,0x33F084,"测试Hook指令",(c,l)=>{
    //     logDevInfo(libdemoBase);
    //     l=`${l}\r\n\tx20:${c.x20}`;
    //     return l;
    // });
    // hookFunc(libdemoBase,0x33E400,"创建auth对象中刚刚给AuthData赋值",(c,l)=>{
    //     printDevInfo(libdemoBase);
    //     l=logGDevInfoAuthData(libdemoBase,l);
    //     if(isFast){
    //         isFast=false;
    //         //readwritebreak(authPoint,8,1);
    //     }
    //     // MemoryAccessMonitor.enable({base:authPoint,size:4}, {
    //     //     onAccess: (details)=>
    //     //     {
    //     //         var log=`创建auth对象中刚刚给AuthData赋值:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
    //     //         console.log(log);
    //     //     }
    //     // });
    //     return l;
    // });
    hookFunc(libdemoBase,0x78E58C,"WCRRegisterPhoneNumber注册账号请求",(c,l)=>{
        printDevInfo(libdemoBase);
        l=logGDevInfoAuthData(libdemoBase,l);
        //var mp=c.x0.add(-0x18).toMatchPattern();
        //scan(libdemoBase,c,mp);
        //scan(libdemoBase,c,mp.substring(5));
        //var mp2=c.x0.add(0x18).toMatchPattern();
        //scan(libdemoBase,c,mp2);
        //scan(libdemoBase,c,mp2.substring(5));
        l=logEncData(c.x0.add(0x48).readPointer(),"x0:AuthEncData",l);
        // MemoryAccessMonitor.enable({base:c.x0.add(0x48).readPointer(),size:8}, {
        //     onAccess: (details)=>
        //     {
        //         var log=`监视AuthEncData内存地址发生操作:${details.operation}-${details.from}-${details.address}\r\n${'RegisterNatives full called from:\\n' + Thread.backtrace(undefined, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n'}\r\nexiting `;
        //         console.log(log);
        //     }
        // });
        return l;
    });
    // hookFunc(libdemoBase,0x813DEC,"Authorization字节转Base64",(c,l)=>{
    //     l=logGDevInfoAuthData(libdemoBase,l);
    //     l=logLengthData(c.x0.add(0x28).readPointer(),c.x0.add(0x18).readU32(),"x1",l);
    //     return l;
    // });
}

function logGDevInfoAuthData(libdemoBase:Module,l:string):string{
    try{
        var gDevInfo=libdemoBase.base.add(0x8A5808).readPointer();
        if(gDevInfo.isNull()){
            l+="\r\nGDevInfo is null\r\n";
            return l;
        }
        var authPoint=gDevInfo.add(0x18).readPointer();
    
        if(authPoint.isNull()){
            l+="\r\nGDevInfo->AuthData is null\r\n";
            return l;
        }
        l+="\r\nGDevInfo->authPoint:"+authPoint+"\r\n";
        var p48=authPoint.add(0x48).readPointer();
        if(p48.isNull()){
            l+="\r\nGDevInfo->AuthData:AuthEncData is null\r\n";
            return l;
        }
        l=logEncData(p48,"GDevInfo->AuthData:AuthEncData",l);
    }catch(ex:any){
        l+="\r\nGDevInfo->AuthData error:"+ex+"\r\n";
    }
    return l;
}
function printGDevInfoAuthData(l:string|null=null){
    if(globalLibWhatsapp==null){
        return;
    }
    l=l+"----printGDevInfoAuthData:"
    l=logGDevInfoAuthData(globalLibWhatsapp,l);
    console.log(l);
}
function scan(libdemoBase:Module,c: Arm64CpuContext,mp:string){
    try{
    console.log(`x0:${c.x0}-mp:${mp}`);
        Memory.scan(libdemoBase.base,libdemoBase.size,mp,{
            onMatch:(a,l)=>{
                try {
                    console.log(`x0:${c.x0}-mp:${mp}-Memory Scan Match:${a}-${l}-${a.readPointer()}`);
                } catch (error) {
                    console.log(`x0:${c.x0}-mp:${mp}-Memory Scan Match:${a}-${l}-error:${error}`);
                }
                
                var mp0=a.toMatchPattern();
                console.log(`a:${a}-mp:${mp0}`);
                Memory.scan(libdemoBase.base,libdemoBase.size,mp0,{
                    onMatch:(a,l)=>{
                        try {
                            console.log(`a:${a}-mp:${mp0}-Memory Scan Match:${a}-${l}-${a.readPointer()}`);
                        } catch (error) {
                            console.log(`a:${a}-mp:${mp0}-Memory Scan Match:${a}-${l}-error:${error}`);
                        }
                    },
                    onComplete() {
                        console.log(`a:${a}-mp:${mp0}-Complete`);
                    },});
            },
            onComplete() {
                console.log(`x0:${c.x0}-mp:${mp}-Complete`);
            },
        });
    }catch(ex:any){
        console.log(`x0:${c.x0}-mp:${mp}-error:${ex}`);
    }
}
var globalLibWhatsapp:Module|null=null;
function testCode(libdemoBase:Module){
    hookFunc(libdemoBase,0x84FF64,"获取地址-0x19A000:",(c,l)=>{
        //l+=`\r\nX11:${c.x11},X1:${c.x1}--${c.x11.add(c.x1).readU32().toString(16)}\r\n`;
        //l+=`\r\nX17:${c.x17},X1:${c.x1}--${c.x17.add(c.x1).readU32().toString(16)}\r\n`;
        //l+=logLengthData(c.x11.add(c.x1),0x40,"x11-Data:",l);
        l+=logLengthData(c.x9.add(-0x1c),0xBC,"x9-Data:",l);
        return l;
    });
    hookFunc(libdemoBase,0x84FC10,"获取地址-0x19AA48:",(c,l)=>{
        l+=`\r\nX11:${c.x11},X1:${c.x1}--${c.x11.add(c.x1).readU32().toString(16)}\r\n`;
        l+=logLengthData(c.x11.add(c.x1),0x40,"x11-Data:",l);
        return l;
    });
}
function testCpp(){
    Java.perform(function () {
        //printModuleName();
        var libdemoBase = Process.findModuleByName("libwhatsapp.so");
        if (!libdemoBase) {
            throw new Error('libwhatsapp.so not found');
        }
        globalLibWhatsapp=libdemoBase;
        setEnteredCallback((l:string)=>printGDevInfoAuthData(l));
        setExitingCallback((l:string)=>printGDevInfoAuthData(l));
        console.log("libwhatsapp base:"+libdemoBase.base);
        try{
            //testCode(libdemoBase);
            //gpia(libdemoBase);
            //testGpia(libdemoBase);
            //Enc(libdemoBase);
            //authorization(libdemoBase);
            //testMem(libdemoBase);
            hookGpiaKey(libdemoBase);
            //EncStr();
        }catch(err:any) {
            console.log(err);
        }
    });
    console.log("end");
}
/**
 * 监视指定的内存修改
 * @param addr 地址
 * @param size 长度
 * @param pattern 修改的属性（1读，2写）
 * @returns 
 */
function readwritebreak(addr:NativePointer, size:number, pattern:number){
    var mc=Module.findExportByName( 'libc.so' ,  'malloc' );
    var mt=Module.findExportByName( 'libc.so' ,  'memset' );
    var mct=Module.findExportByName( 'libc.so' ,  'mprotect' );
    var fe=Module.findExportByName( 'libc.so' ,  'free' );
    if(mc==null||mt==null||mct==null||fe==null){
        console.log("malloc is null");
        return;
    }
    const malloc  = new NativeFunction(mc,  'pointer' , [ 'size_t' ]);
    const memset  = new NativeFunction(mt,  'pointer' , [ 'pointer' ,  'size_t' ,  'int' ]);
    const mprotect  = new NativeFunction(mct,  'int' , [ 'pointer' ,  'size_t' ,  'int' ]);
    const free  = new NativeFunction(fe,  'void' , [ 'pointer' ]);
     var point1 = addr.add(-(addr.toUInt32() % 0x1000 ));
     console.log( "set memcpy break : " ,point1);
 
     const mycode  = malloc( 0x1000 );
     var t1=mprotect(mycode, 0x1000 , 7 );
     var t=memset(mycode, 0x1000 , 0 );
 
     //构建code
     mycode.add( 0x4 ).writeU32( 0xD10943FF ); // SUB SP ,SP , #0x250
     mycode.add( 0x8 ).writeU32( 0xA90077E8 ); // STP X8,X29,[SP]
     mycode.add( 0xc ).writeU32( 0xA90107E0 );// STP X0 ,X1 ,[SP, #0x10]
     mycode.add( 0x10 ).writeU32( 0xA9020FE2 );// STP X2,X3,[SP, #0x20]
     mycode.add( 0x14 ).writeU32( 0x58000760 );// LDR X0 , [mycode, #0x100]
     mycode.add( 0x18 ).writeU32( 0x58000781 );// LDR X1 , [mycode, #0x108]
     mycode.add( 0x1C ).writeU32( 0x580007A2 );// LDR X2 , [mycode, #0x110]
     mycode.add( 0x20 ).writeU32( 0x580007C3 );// LDR X3 , [mycode, #0x118]
     mycode.add( 0x24 ).writeU32( 0xD63F0060 );// BLR X3
     mycode.add( 0x28 ).writeU32( 0xA9420FE2 );// LDP X2, X3,[SP, #0x20]
     mycode.add( 0x2C ).writeU32( 0xA94107E0 );// LDP X0, X1,[SP, #0x10]
     mycode.add( 0x30 ).writeU32( 0xA94077E8 );// LDP X8, X29,[SP]
     mycode.add( 0x34 ).writeU32( 0x910943FF );// ADD SP, SP,  #0x250
     mycode.add( 0x38 ).writeU32( 0x5800075E );// LDR X30, [mycode, #0x120]
     mycode.add( 0x3C ).writeU32( 0xD65F03C0 );// RET
 
    // 将point1, 0x1000 ,pattern放入mycode + 0x100
     mycode.add( 0x100 ).writePointer(point1)
     mycode.add( 0x108 ).writeU64( 0x1000 )
     mycode.add( 0x110 ).writeU64(pattern)
    // mprotect函数存入 0x118
     mycode.add( 0x118 ).writePointer(mprotect)
     // 修改目标内存页属性
     mprotect(point1, 0x1000 ,pattern)
    
     Process.setExceptionHandler(function(details){
         console.log("命中:Process.setExceptionHandler:",details.type,"-point1:",point1,
         "-memory operation:"
         ,details.memory?.operation,"-memory address:",details.memory?.address);
         if (details.type.indexOf( "access-violation" ) >= 0&&details.memory ){
             var mempoint =details.memory.address;
             var point=point1.and(0xffffffffff);
             console.log("命中:point:",point);
             // 判断是否是由自己修改内存导致的异常
             if (point<= mempoint&&mempoint<point.add( 0x1000) ){
                // 是否命中我们关心的地址
                 var off = mempoint.sub(addr).toInt32();
                 if (off>= 0 &&off<size){
                     console.log("命中:");
                     console.warn( "命中:" ,addr, " pc pointer : " ,details.address)
                     var module  = Process.findModuleByAddress(details.context.pc);
                     if(module==null){
                        console.warn( "命中:module is null" )
                        return;
                     }
                     console.warn( "命中:pc - - > " ,module.name, " -> " ,details.context.pc.sub(module.base))
                     mprotect(point1, 0x1000 , 7 )
                     free(mycode);
                     // console.error( 'RegisterNatives called from:\n' + Thread.backtrace(details.context, Backtracer.ACCURATE). map (DebugSymbol.fromAddress).join( '\n' )  + '\n' );
                     console.warn( "命中:readwritebreak exit" )
                     return true
 
                 } else {
                     console.log("命中:",details.memory.operation, "exce ;mpoint :" ,mempoint, ";pc -> " ,details.context.pc, "; opcode :" ,ptr(details.context.pc.readU32()), "\n" )  
                    // 将内存页属性改回来
                     mprotect(point1, 0x1000 , 7 )
 
                    // 将下一个code地址写入mycode + 0x120 处作为返回地址
                     mycode.add( 0x120 ).writePointer(details.context.pc.add( 4 ))
                     var module  = Process.findModuleByAddress(details.context.pc);
                     if(module!=null){
                        console.warn( "命中:pc - - > " ,module.name, " -> " ,details.context.pc.sub(module.base))
                     }
                     var thiscode = details.context.pc.readU32()
                     var opcode = ((thiscode>> 24 )& 0x3b )
                    // 三个pc偏移寻址共同位 
                     if (opcode == 24 ){
                        // 将需要读取的数据存入mycode + 0x128 处
                         mycode.add( 0x128 ).writePointer(mempoint.readPointer()) 
                         mycode.add( 0x130 ).writePointer(mempoint.add( 8 ).readPointer()) 
                        // LDR Rn  #pc+0x128
                         var n_code = (thiscode& 0xFF00001F )| 0x940
                         mycode.writeU32(n_code)
                         details.context.pc  = mycode
                     } else {
                       // 将当前code写入mycode
                         mycode.writeU32(details.context.pc.readU32())
                       // 直接修改pc
                         details.context.pc  = mycode
                     }
                     return true
                 }
             }else{
                console.log("命中: 未满足 point1<= mempoint&&mempoint<point1.add( 0x1000)");
             return false;}
         }else{
         console.log("命中: 未满足 details.type.indexOf(\"access-violation\" ) >= 0&&details.memory");
         return false;
        }
     })
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
                log+=`\r\n\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}\r\n`;
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
 * 打印C++数据结构EncData中的数据(EncData结构)
 * @param encData 
 * @param head 
 * @param log 
 * @returns 
 */
function logEncData(encData:NativePointer,head:string,log:string):string{
    try{
        log=logLengthData(encData.add(0x28).readPointer(),encData.add(0x18).readU32(),head,log);
    }catch(ex:any){
        log+=`\r\n${head}:ThrowException:${ex.message}`;
    }
    return log;
}
/**
 * 打印C++数据结构ByteData中的数据(ByteData结构)
 * @param byteData 
 * @param head 
 * @param log 
 * @returns 
 */
function logByteData(byteData:NativePointer,head:string,log:string):string{
    try{
        log=logLengthData(byteData.add(0x20).readPointer(),byteData.add(0x18).readU32(),head,log);
    }catch(ex:any){
        log+=`\r\n${head}:ThrowException:${ex.message}`;
    }
    return log;
}
/**
 * 最大显示字节
 */
var maxShowByte=160;
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
    if(length==0){
        log+=`${head} length:${length} 字符串为空\r\n`;
        return log;
    }
    var da=dataPointer.readByteArray(length);
    if(da==null){
        log+=`${head} length:${length} 字符串为空\r\n`;
    }else{
        log+=`${head} length:${length} str:\r\n${hexdump(da)}${suffix}\r\n`;
    }
    return log;
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
        log+=`${head} length:${length} str:\r\n${hexdump(da)}${suffix}\r\n`;
    }
    return log;
}
/**
 * 读取结构中的字节数据
 * @param app 结构指针
 * @param lengthNp 长度偏移
 * @param dataNp 数据偏移
 * @returns 
 */
function readStructureByteData(app:NativePointer,lengthNp:number,dataNp:number):ArrayBuffer | null{
    var length=app.add(lengthNp).readInt();
    if(length<0){
        length=app.add(lengthNp).readU32();
    }
    return app.add(dataNp).readByteArray(length);
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
function hookJava(){
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
//获取key和Signature
function getToken(){
    Java.perform(function() {
        var targetClassMethod="javax.crypto.Mac";
        var hook = Java.use(targetClassMethod);
        var base64 = Java.use("java.util.Base64");
        var targetMethod="init";
        var overloadCount = hook[targetMethod].overloads.length;
	    console.log("Tracing " + targetClassMethod+"."+targetMethod + " [" + overloadCount + " overload(s)]");
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

function hookAuth(){
    Java.perform(function() {
        var targetClassMethod="X.0v6";
        var hook = Java.use(targetClassMethod);
        var base64 = Java.use("java.util.Base64");
        var targetMethod="A05";
        var overloadCount = hook[targetMethod].overloads.length;
	    console.log("Tracing " + targetClassMethod +"."+targetMethod + " [" + overloadCount + " overload(s)]");
	    for (var i = 0; i < overloadCount; i++) {
            hook[targetMethod].overloads[i].implementation = function() {
                var invokeId:string=Math.random().toString(36).slice( - 8);
                try{
                    var hashCode=this.hashCode();
                }catch{
    
                }
                try {
                    console.log("打印证书内容1");
                    var keyStore=Java.use("java.security.KeyStore");
                    //console.log("打印证书内容1-1");
                    var byteArrayOutputStream=Java.use("java.io.ByteArrayOutputStream");
                    var Certificate=Java.use("java.security.cert.Certificate");
                    //var lap=Java.use("java.security.KeyStore.LoadStoreParameter");
                    //console.log("打印证书内容1-2");
                    var instance = keyStore.getInstance("AndroidKeyStore");
                    instance.load(null);
                    //console.log("打印证书内容1-3");
                    var certificateC= instance.getCertificateChain(arguments[1]);
                    //console.log("打印证书内容1-4");
                    var uByteArrayOu = byteArrayOutputStream.$new();
                    //console.log("打印证书内容1-5");
                    if (certificateC != null) {
                        //console.log(`certificateC length:${certificateC.length}`);
                        for (var i = certificateC.length - 1; i >= 0; i = i - 1) {
                            var certificate=Java.cast(certificateC[i],Certificate);
                            //console.log(`certificateC[i]:${certificate}`);
                            //console.log("打印证书内容1-6");
                            var encodedCert=certificate.getEncoded();
                            //console.log("打印证书内容1-7");
                            console.log(`encodedCert:${encodedCert}`);
                            //console.log(`encodedCert:${base64.getEncoder().encodeToString(encodedCert)}`);
                            //console.log("打印证书内容1-8");
                            uByteArrayOu.write(encodedCert,0,encodedCert.length);
                            //console.log("打印证书内容1-9");
                        }
                    }
                    uByteArrayOu.size();
                    //console.log("打印证书内容1-10");
                    var data=uByteArrayOu.toByteArray();
                    //console.log("打印证书内容1-11");
                    console.log(`data:${data}`);
                    console.log(`data:${base64.getEncoder().encodeToString(data)}`);
                    //console.log("打印证书内容1-12");
                } catch (error) {
                    console.error(`获得证书时报错${error}`);
                }
                console.warn(`\n***${invokeId}-${hashCode}: entered ${targetClassMethod}` );
                // print args
                if (arguments.length) console.log();
                for (var j = 0; j < arguments.length; j++) {
                    var jsonObj:string="";
                    var baseStr:string=""
                    try{
                        baseStr=base64.encodeToString(arguments[j], 2);
                    }catch(ex:any){
                    }
                    console.log(`${invokeId}-${hashCode}:arg[${j}]: ${arguments[j]},class:${(arguments[j]?.class)?arguments[j].class.getTypeName():""},json:${jsonObj},base:${baseStr}` );
                }
                javaInit();
                var retval = this[targetMethod].apply(this, arguments);
                if(retval!=null){
                    console.log(`\t${invokeId}-${hashCode}:type: ` + retval.class);
                    try{
                        console.log(`\n${invokeId}-${hashCode}:retval: ` + base64.encodeToString(retval, 2));
                    }catch{
    
                    }
                }
                try {
                    console.log("打印证书内容2");
                    var keyStore=Java.use("java.security.KeyStore");
                    //console.log("打印证书内容1-1");
                    var byteArrayOutputStream=Java.use("java.io.ByteArrayOutputStream");
                    var Certificate=Java.use("java.security.cert.Certificate");
                    //var lap=Java.use("java.security.KeyStore.LoadStoreParameter");
                    //console.log("打印证书内容1-2");
                    var instance = keyStore.getInstance("AndroidKeyStore");
                    instance.load(null);
                    //console.log("打印证书内容1-3");
                    var certificateC= instance.getCertificateChain(arguments[1]);
                    //console.log("打印证书内容1-4");
                    var uByteArrayOu = byteArrayOutputStream.$new();
                    //console.log("打印证书内容1-5");
                    if (certificateC != null) {
                        //console.log(`certificateC length:${certificateC.length}`);
                        for (var i = certificateC.length - 1; i >= 0; i = i - 1) {
                            var certificate=Java.cast(certificateC[i],Certificate);
                            //console.log(`certificateC[i]:${certificate}`);
                            //console.log("打印证书内容1-6");
                            var encodedCert=certificate.getEncoded();
                            //console.log("打印证书内容1-7");
                            console.log(`encodedCert:${encodedCert}`);
                            //console.log(`encodedCert:${base64.getEncoder().encodeToString(encodedCert)}`);
                            //console.log("打印证书内容1-8");
                            uByteArrayOu.write(encodedCert,0,encodedCert.length);
                            //console.log("打印证书内容1-9");
                        }
                    }
                    uByteArrayOu.size();
                    //console.log("打印证书内容1-10");
                    var data=uByteArrayOu.toByteArray();
                    //console.log("打印证书内容1-11");
                    console.log(`data:${data}`);
                    console.log(`data:${base64.getEncoder().encodeToString(data)}`);
                    //console.log("打印证书内容1-12");
                } catch (error) {
                    console.error(`获得证书时报错${error}`);
                }
                console.warn(`\n***${invokeId}-${hashCode}: exiting ` + targetClassMethod);
                return retval;
            }
        }});
}
function hookHttp(){
    start();
}
/**
 * 监视so加载到内存
 */
function soInit(){
    soStart("libwhatsapp",(t,r)=>{
        testCpp();
        console.log(`threadId:${t.threadId}-returnAddress:${t.returnAddress}-r:${r}`);
    });
}
/**
 * 监视java入口方法(无java环境)
 */
function javaMethodInit(){
    try{
        //只能监视方法(在Java.perform可以监视类)
        var array:string[]=[
            //"java.util.HashMap.put",
            'com.whatsapp.wamsys.JniBridge.jvidispatchIIOOOOO',//设置au
            //"com.whatsapp.wamsys.JniBridge"
            //"com.whatsapp.wamsys.JniBridge.jvidispatchO",
            "com.whatsapp.wamsys.JniBridge.jvidispatchIOO",
            "X.0v6.A05"
        ];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            traceMethod(element);
        }
    }catch(ex:any){
        console.log(ex);
    }
}
function javaInit(){
    try{
        var array:string[]=[
            // 'X.0oF',
            // "X.0qC",
            // "X.0v6",
            // "X.0uY",
            "java.security.KeyPairGenerator",
            "android.security.keystore.KeyGenParameterSpec.Builder",
            "java.security.KeyStore",
            //"java.nio.ByteBuffer",
            "java.security.KeyPairGenerator"
        ];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            trace(element);
        }
    }catch(ex:any){
        console.log(ex);
    }
}
/**
 * 监视java环境入口
 */
function javaPerformInit(){
    Java.perform(function() {
        //javaMethodInit();
        //javaInit();
    });
}
/**
 * 延时hook
 */
function delayedHook(){
    setTimeout(function(){
        //findRegisterNatives();
        //test1();
        //testCpp();
        //test2();
        //test3();
        //test4();
        //test5();
        //hookJava();
        //getToken();
        //hookHttp();
        //test6();
    },1000);
}
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
exceptionHandler();
//javaInit();
//hookAuth();
soInit();

//javaPerformInit();