import {dumpModule,printHead,hookFuncArgsByAddress,hookFuncAddressArgs,exceptionHandler,toObjectCString,printClass,hookFuncArgsByClassMenth,hookClassMethod, disableSsl,printMethod,printModules,hookFuncArgsByName,hookFuncByName,setMaxShowByte,logLengthData,printModuleAllExports,printModuleAllSymbol, logData} from "./iosFun.js"
import {test} from './test.js'
exceptionHandler();
printHead();
//test();
//printClass(['enc','mbedtls','gcm','curve','25519']);
//hookClassMethod(['25519','json']);
//hookClassMethod(['WAPreparedRegistrationURL','WARegistrationURLBuilder']);
//hookClassMethod(['NSData'],['wa_URLSafeBase64EncodedString']);
//hookClassMethod(['WARegistrationURLBuilder'],['sameDeviceCheckRequestURLWithOfflineExposures:offlineMetrics:pushToken:tokenReadError:context:']);
//printClass(['WAPreparedRegistrationURL']);
//printMethod(null,['PushToken','push_token']);
//printMethod(null,['mbedtls','gcm','setkey'])
//printMethod(null,['URLSafeBase64EncodedString']);
//printModules();
// hookFuncArgsByClassMenth("WARegistrationURLBuilder","samedevicecheckrequesturlwithofflineexposures","pushTkoen:sameDeviceCheckRequestURLWithOfflineExposures",(c,p,l)=>{
//     l+=`Arg4:${toObjectCString(p[4])}`;
//     //l=logData(c.x3,c.x4,'iv',l);
//     //l=logData(c.x5,c.x6,'add',l);
//     //l=logData(c.x7,c.x2,'input',l);
//     //l=logData(c.x8,c.x2,'out',l);
//     //l=logData(c.x10,c.x9,'tag',l);
//     return l;
// });
// hookFuncByName("SharedModules","mbedtls_gcm_crypt_and_tag","加密方法:_mbedtls_gcm_crypt_and_tag",(c,l)=>{
//     // l=logLengthData(c.x0,0x100,'x0',l);
//     // l=logLengthData(c.x1,0x100,'x1',l);
//     // l=logLengthData(c.x2,0x100,'x2',l);
//     // l=logLengthData(c.x3,0x100,'x3',l);
//     // l=logLengthData(c.x4,0x100,'x4',l);
//     // l=logLengthData(c.x5,0x100,'x5',l);
//     // l=logLengthData(c.x6,0x100,'x6',l);
//     l=logData(c.x3,c.x4,'iv',l);
//     l=logData(c.x5,c.x6,'add',l);
//     l=logData(c.x7,c.x2,'input',l);
//     //l=logData(c.x8,c.x2,'out',l);
//     //l=logData(c.x10,c.x9,'tag',l);
//     return l;
// });
setMaxShowByte(0x10000);
hookFuncByName("SharedModules","mbedtls_gcm_update","加密方法:mbedtls_gcm_update",(c,l)=>{
    var length=c.x1.toUInt32();
    l=logLengthData(c.x2,length,'input',l);
    return l;
});
//dumpModule('WhatsApp');
//dumpModule('SharedModules');
// disableSsl();
// var length=0;
// var dataP:NativePointer;
// hookFuncByName("SharedModules","mbedtls_gcm_update","加密方法:mbedtls_gcm_update",(c,l)=>{
//     length=c.x1.toUInt32();
//     dataP=c.x3;
//     l=logLengthData(c.x2,length,'input',l);
    
//     return l;
// },(c,l)=>{
//     l=logLengthData(dataP,length,'out',l);
//     return l;
// });
//printModuleAllExports('SharedModules');
function GetPushToken(){
    hookFuncArgsByClassMenth("WARegistrationURLBuilder","samedevicecheckrequesturlwithofflineexposures","pushTkoen:sameDeviceCheckRequestURLWithOfflineExposures",(c,p,l)=>{
        l+=`arg0:${p[0]},arg1:${p[1]},arg2:${p[2]},arg3:${p[3]},arg4:${p[4]},arg5:${p[5]},arg6:${p[6]},arg7:${p[7]},arg8:${p[8]},arg9:${p[9]},arg10:${p[10]}`;
        l+=`\r\nArg4:${toObjectCString(p[4])}`;
        //l=logData(c.x3,c.x4,'iv',l);
        //l=logData(c.x5,c.x6,'add',l);
        //l=logData(c.x7,c.x2,'input',l);
        //l=logData(c.x8,c.x2,'out',l);
        //l=logData(c.x10,c.x9,'tag',l);
        return l;
    });
    hookFuncByName("SharedModules","WASignalDecryptMessage","WASignalDecryptMessage",(c,l)=>{
        return l;
    });
    hookFuncArgsByAddress("WhatsApp",0x264BC78,"10264BC78",(c,a,l)=>{
        return l;
    });
    hookFuncArgsByAddress("WhatsApp",0x28A6A20,"1028A6A20",(c,a,l)=>{
        return l;
    });
    hookFuncArgsByAddress("WhatsApp",0x2915500,"102915500",(c,a,l)=>{
        return l;
    });
    hookFuncArgsByAddress("WhatsApp",0x28BE9C0,"1028BE9C0",(c,a,l)=>{
        return l;
    });
    hookFuncArgsByAddress("WhatsApp",0x288EA40,"10288EA40",(c,a,l)=>{
        return l;
    });
}