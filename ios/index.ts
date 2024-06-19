import {printClass,hookClassMethod, disableSsl,printMethod,printModules,hookFuncByName,setMaxShowByte,logLengthData,printModuleAllExports,printModuleAllSymbol, logData} from "./iosFun.js"
import {test} from './test.js'
test();
//printClass(['enc','mbedtls','gcm','curve','25519']);
//hookClassMethod(['25519','json']);
//hookClassMethod(['WAPushController']);
//hookClassMethod(['NSData'],['URLSafeBase64EncodedString']);
//printClass(['json']);
//printMethod(null,['PushToken','push_token']);
//printMethod(null,['mbedtls','gcm','setkey'])
//printMethod(null,['base64']);
//printModules();
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
// },(c,l)=>{
//     return l;
// });
// setMaxShowByte(0x10000);
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