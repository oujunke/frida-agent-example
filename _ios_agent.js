📦
697 /ios/index.js.map
1514 /ios/index.js
5188 /general/base64.js.map
4207 /general/base64.js
696 /general/logger.js.map
371 /general/logger.js
5119 /general/utils.js.map
5666 /general/utils.js
4063 /ios/NSURLRequest.js.map
5566 /ios/NSURLRequest.js
6586 /ios/hooks/hooking.js.map
8054 /ios/hooks/hooking.js
775 /ios/hooks/trace_class.js.map
967 /ios/hooks/trace_class.js
1804 /ios/hooks/trace_method.js.map
2507 /ios/hooks/trace_method.js
2342 /ios/iosFun.js.map
2603 /ios/iosFun.js
2707 /ios/pinning/SSLHandshake.js.map
4417 /ios/pinning/SSLHandshake.js
1322 /ios/pinning/boringssl_pinning.js.map
1559 /ios/pinning/boringssl_pinning.js
1624 /ios/pinning/ssl_pinning.js.map
1605 /ios/pinning/ssl_pinning.js
1333 /ios/pinning/tls_12_pinning.js.map
2052 /ios/pinning/tls_12_pinning.js
1060 /ios/pinning/tls_pinning.js.map
1162 /ios/pinning/tls_pinning.js
1725 /ios/pinning/universal_pinning.js.map
1691 /ios/pinning/universal_pinning.js
1073 /ios/test.js.map
1357 /ios/test.js
✄
{"version":3,"file":"index.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/index.ts"],"names":[],"mappings":"AACA,OAAO,EAAC,IAAI,EAAC,MAAM,WAAW,CAAA;AAC9B,IAAI,EAAE,CAAC;AACP,sDAAsD;AACtD,oCAAoC;AACpC,wCAAwC;AACxC,6DAA6D;AAC7D,uBAAuB;AACvB,+CAA+C;AAC/C,8CAA8C;AAC9C,+BAA+B;AAC/B,iBAAiB;AACjB,wGAAwG;AACxG,6CAA6C;AAC7C,6CAA6C;AAC7C,6CAA6C;AAC7C,6CAA6C;AAC7C,6CAA6C;AAC7C,6CAA6C;AAC7C,6CAA6C;AAC7C,mCAAmC;AACnC,oCAAoC;AACpC,sCAAsC;AACtC,sCAAsC;AACtC,uCAAuC;AACvC,gBAAgB;AAChB,aAAa;AACb,gBAAgB;AAChB,MAAM;AACN,2BAA2B;AAC3B,gBAAgB;AAChB,gBAAgB;AAChB,2BAA2B;AAC3B,yFAAyF;AACzF,8BAA8B;AAC9B,kBAAkB;AAClB,8CAA8C;AAE9C,gBAAgB;AAChB,aAAa;AACb,6CAA6C;AAC7C,gBAAgB;AAChB,MAAM;AACN,yCAAyC"}
✄
import { test } from './test.js';
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
✄
{"version":3,"file":"base64.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["general/base64.ts"],"names":[],"mappings":"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"}
✄
export { byteLength, toByteArray, fromByteArray };
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1)
        validLen = len;
    var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4);
    return [validLen, placeHoldersLen];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen;
    var i;
    for (i = 0; i < len; i += 4) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 18) |
                (revLookup[b64.charCodeAt(i + 1)] << 12) |
                (revLookup[b64.charCodeAt(i + 2)] << 6) |
                revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = (tmp >> 16) & 0xFF;
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 2) |
                (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 10) |
                (revLookup[b64.charCodeAt(i + 1)] << 4) |
                (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
        tmp =
            ((uint8[i] << 16) & 0xFF0000) +
                ((uint8[i + 1] << 8) & 0xFF00) +
                (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] +
            lookup[(tmp << 4) & 0x3F] +
            '==');
    }
    else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] +
            lookup[(tmp >> 4) & 0x3F] +
            lookup[(tmp << 2) & 0x3F] +
            '=');
    }
    return parts.join('');
}
✄
{"version":3,"file":"logger.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["general/logger.ts"],"names":[],"mappings":"AAAA,OAAO,EAAC,GAAG,EAAC,KAAK,EAAC,IAAI,EAAC,IAAI,EAAC,KAAK,EAAC,CAAA;AAClC,SAAS,GAAG,CAAC,OAAe,EAAC,CAAQ;IACjC,IAAG,CAAC,IAAE,KAAK;QACP,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC;AAC7B,CAAC;AACD,SAAS,KAAK,CAAC,OAAe;IAC1B,GAAG,CAAC,QAAQ,GAAC,OAAO,EAAC,CAAC,CAAC,CAAC;AAC5B,CAAC;AACD,SAAS,IAAI,CAAC,OAAe;IACzB,GAAG,CAAC,OAAO,GAAC,OAAO,EAAC,CAAC,CAAC,CAAC;AAC3B,CAAC;AACD,SAAS,IAAI,CAAC,OAAe;IACzB,GAAG,CAAC,OAAO,GAAC,OAAO,EAAC,CAAC,CAAC,CAAC;AAC3B,CAAC;AACD,SAAS,KAAK,CAAC,OAAe;IAC1B,GAAG,CAAC,QAAQ,GAAC,OAAO,EAAC,CAAC,CAAC,CAAC;AAC5B,CAAC;AACD,IAAI,KAAK,GAAC,CAAC,CAAC"}
✄
export { log, debug, info, warn, error };
function log(message, l) {
    if (l >= level)
        console.log(message);
}
function debug(message) {
    log("debug:" + message, 0);
}
function info(message) {
    log("info:" + message, 1);
}
function warn(message) {
    log("warn:" + message, 2);
}
function error(message) {
    log("error:" + message, 3);
}
var level = 0;
✄
{"version":3,"file":"utils.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["general/utils.ts"],"names":[],"mappings":"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"}
✄
import { info } from './logger.js';
import { fromByteArray } from "./base64.js";
/**
 * 最大显示字节
 */
var maxShowByte = 0x400;
/**
 * 使用Log记录字节数据
 * @param dataPointer 字节数据指针
 * @param length 字节数据长度
 * @param head 日记头
 * @param log 日记字符串
 * @returns
 */
function logLengthData(dataPointer, length, head, log) {
    var suffix = "";
    if (length > maxShowByte) {
        suffix = `\r\n省略以下${length - maxShowByte}字节`;
        length = maxShowByte;
    }
    if (length == 0 || dataPointer.toUInt32() == 0) {
        log += `${head} length:${length} 字符串为空\r\n`;
        return log;
    }
    var da = dataPointer.readByteArray(length);
    if (da == null) {
        log += `${head} length:${length} 字符串为空\r\n`;
    }
    else {
        log += `${head} length:${length} \r\nbase64:${base64FromByteArray(new Uint8Array(da))} \r\nstr:\r\n${hexdump(da)}${suffix}\r\n`;
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
function logData(dataPointer, lengthPointer, head, log) {
    var length = lengthPointer.toUInt32();
    return logLengthData(dataPointer, length, head, log);
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
function logOffsetData(sourcePointer, lengthNp, dataNp, head, log) {
    var length = sourcePointer.add(lengthNp).readInt();
    if (length < 0) {
        length = sourcePointer.add(lengthNp).readU32();
    }
    var suffix = "";
    if (length > maxShowByte) {
        suffix = `\r\n省略以下${length - maxShowByte}字节`;
        length = maxShowByte;
    }
    var da = sourcePointer.add(dataNp).readByteArray(length);
    if (da != null) {
        log += `${head} length:${length} \r\nbase64:${base64FromByteArray(da)} \r\nstr:\r\n${hexdump(da)}${suffix}\r\n`;
    }
    return log;
}
/**
 * 打印多的堆栈信息
 * @param obj
 */
function getFullNativeTrace(obj) {
    return 'RegisterNatives full called from:\r\n' + Thread.backtrace(obj.context, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\n\t') + '\r\n';
}
function hookModuleAllExports(name) {
    var module = Process.getModuleByName(name);
    if (module == null) {
        info("当前Module不存在");
        return;
    }
    var exports = module.enumerateExports();
    for (let index = 0; index < exports.length; index++) {
        const element = exports[index];
        Interceptor.attach(element.address, {
            onEnter(args) {
                console.log(getFullNativeTrace(this));
            },
        });
    }
}
function logAllX(c, l) {
    for (let i = 0; i < 29; i++) {
        l += `x${i}:${c['x' + i]}-`;
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
function hookFunc(libdemoBase, add, label, callback, leaveCallback = null, isIgnore = null) {
    const hookAddress = libdemoBase.base.add(add);
    var ins = Interceptor.attach(hookAddress, {
        onEnter: function (args) {
            if (isIgnore && isIgnore.apply(this)) {
                return;
            }
            let contextArm = this.context;
            let log = `entered HookFunc ${add.toString(16)}-${label}-${this.threadId}:`; //+args.length;
            try {
                log += `\r\n\t${logAllX(contextArm, log)}\r\n`;
                log = callback.apply(this, [contextArm, log]);
            }
            catch (ex) {
                log += `\r\nThrowException:${ex.message}`;
            }
            log += `\r\n${getFullNativeTrace(this)}\r\nexiting HookFunc ${add.toString(16)}-${label};`;
            console.log(log);
        },
        onLeave: function (retval) {
            if (isIgnore && isIgnore.apply(this)) {
                return;
            }
            if (leaveCallback != null) {
                let contextArm = this.context;
                let log = `entered Leave HookFunc ${add.toString(16)}-${label}-${this.threadId}:`; //+args.length;
                try {
                    log += `\r\n\tx0:${contextArm.x0},x1:${contextArm.x1},x2:${contextArm.x2},x3:${contextArm.x3},x4:${contextArm.x4},x5:${contextArm.x5},x6:${contextArm.x6},x7:${contextArm.x7},x8:${contextArm.x8}\r\n`;
                    log = leaveCallback.apply(this, [contextArm, log]);
                }
                catch (ex) {
                    log += `\r\nThrowException:${ex.message}`;
                }
                log += `\r\nexiting Leave HookFunc ${add.toString(16)}-${label};`;
                console.log(log);
            }
        }
    });
    return ins;
}
function hookFuncByName(moduleName, funcName, label, callback, leaveCallback = null, isIgnore = null) {
    var module = Process.getModuleByName(moduleName);
    if (module == null) {
        info("当前Module不存在");
        return null;
    }
    var fun = module.findExportByName(funcName);
    if (fun == null) {
        info("当前fun不存在");
        return null;
    }
    return hookFunc(module, fun.sub(module.base).toInt32(), label, callback, leaveCallback, isIgnore);
}
export function base64FromByteArray(bs) {
    return fromByteArray(bs);
}
export function setMaxShowByte(maxNum) {
    maxShowByte = maxNum;
}
export { logLengthData, logData, logOffsetData, hookFunc, hookFuncByName };
✄
{"version":3,"file":"NSURLRequest.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/NSURLRequest.js"],"names":[],"mappings":"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"}
✄
export function hook() {
    if (ObjC.available) {
        for (var className in ObjC.classes) {
            if (ObjC.classes.hasOwnProperty(className)) {
                //Connection
                if (className == "NSURLConnection") {
                    send("Found target class : " + className);
                    var hook = ObjC.classes.NSURLConnection["- start"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection start]");
                        }
                    });
                    var hook = ObjC.classes.NSURLConnection["- initWithRequest:delegate:startImmediately:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection initWithRequest:startImmediately] (Deprecated at iOS 9.0)");
                        }
                    });
                    var hook = ObjC.classes.NSURLConnection["- initWithRequest:delegate:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection initWithRequest] (Deprecated at iOS 9.0)");
                        }
                    });
                    var hook = ObjC.classes.NSURLConnection["+ connectionWithRequest:delegate:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection connectionWithRequest] (Deprecated at iOS 9.0)");
                        }
                    });
                    var hook = ObjC.classes.NSURLConnection["+ sendSynchronousRequest:returningResponse:error:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection sendSynchronousRequest] (Deprecated at iOS 9.0)");
                        }
                    });
                    var hook = ObjC.classes.NSURLConnection["+ sendAsynchronousRequest:queue:completionHandler:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            send("HTTP Request sent! [NSURLConnection sendAsynchronousRequest] (Deprecated at iOS 9.0)");
                        }
                    });
                }
                //Getting URL GET Requests
                if (className == "NSURLRequest") {
                    send("Found our target class : " + className);
                    var hook = ObjC.classes.NSURLRequest["+ requestWithURL:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            var receiver = new ObjC.Object(args[0]);
                            var sel = ObjC.selectorAsString(args[1]);
                            var obj = ObjC.Object(args[2]);
                            send("HTTP Request [ " + receiver + " " + sel + " ] => NSURL: " + obj.toString());
                        }
                    });
                }
                //Getting URL POST Requests
                if (className == "NSMutableURLRequest") {
                    send("Found our target class : " + className);
                    //Getting URL
                    var hook = ObjC.classes.NSMutableURLRequest["+ requestWithURL:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            var receiver = new ObjC.Object(args[0]);
                            var sel = ObjC.selectorAsString(args[1]);
                            var obj = ObjC.Object(args[2]);
                            send("HTTP Request [ " + receiver + " " + sel + " ] => NSURL: " + obj.toString());
                        }
                    });
                    //Getting POST Data
                    var hook = ObjC.classes.NSMutableURLRequest["- setHTTPBody:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            var receiver = new ObjC.Object(args[0]);
                            var sel = ObjC.selectorAsString(args[1]);
                            var data = ObjC.Object(args[2]);
                            var string = ObjC.classes.NSString.alloc();
                            send(" HTTP Request via [ " + receiver + " " + sel + " ] => DATA: " + string.initWithData_encoding_(data, 4));
                        }
                    });
                    var hook = ObjC.classes.NSMutableURLRequest["- setHTTPBodyStream:"];
                    Interceptor.attach(hook.implementation, {
                        onEnter: function (args) {
                            var receiver = new ObjC.Object(args[0]);
                            var sel = ObjC.selectorAsString(args[1]);
                            var data = ObjC.Object(args[2]);
                            var string = ObjC.classes.NSString.alloc();
                            send(" HTTP Request via [ " + receiver + " " + sel + " ] => DATA: " + string.initWithData_encoding_(data, 4));
                        }
                    });
                }
            }
        }
    }
    else {
        console.log("Objective-C Runtime is not available!");
    }
}
✄
{"version":3,"file":"hooking.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/hooks/hooking.js"],"names":[],"mappings":"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"}
✄
/*
Description:
Hooks into methods
* Given one or more classes in "search_class", it hooks into all their methods.
* Given one or more methods in "search_method", it hooks into all methods of any classes that meet with the search criteria.
* Given a class and a method, it hooks into the method of this class.
* Neither class nor method full name is needed in order to hook. If a partial string is given, the script will hook into all the methods that have the string in their name.
*/
export function hook(search_class, search_method) {
    //var search_class = [''];
    //var search_method = [''];
    var colors = {
        "resetColor": "\x1b[0m",
        "green": "\x1b[32m",
        "yellow": "\x1b[33m",
        "red": "\x1b[31m"
    };
    function search_methods(className) {
        var methods_found = [];
        var methods = ObjC.classes[className].$ownMethods;
        if (Array.isArray(search_method) && search_method.length) { //search_method not empty
            for (var j = 0; j < search_method.length; j++) {
                if (methods.join(' ').toLowerCase().includes(search_method[j].toLowerCase())) {
                    for (var i = 0; i < methods.length; i++) {
                        if (methods[i].toLowerCase().includes(search_method[j].toLowerCase())) {
                            methods_found.push(methods[i]);
                        }
                    }
                }
            }
        }
        else {
            var methods = ObjC.classes[className].$ownMethods;
            for (var i = 0; i < methods.length; i++) {
                methods_found.push(methods[i]);
            }
        }
        return methods_found;
    }
    function search_classes() {
        var classes_found = [];
        for (var className in ObjC.classes) {
            if (Array.isArray(search_class) && search_class.length) {
                for (var i = 0; i < search_class.length; i++) {
                    if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
                        classes_found.push(className);
                    }
                }
            }
        }
        return classes_found;
    }
    /**
     * The function `print_arguments` takes an array of arguments and prints information about each
     * argument, including its type, byte representation in hexadecimal, string representation, and binary
     * data representation.
     * @param args - The `args` parameter is an array of arguments passed to a function. In this case, it
     * seems to be an array of Objective-C objects.
     */
    function print_arguments(args) {
        try {
            var n = 100;
            var last_arg = '';
            for (var i = 2; i < n; ++i) {
                var arg = (new ObjC.Object(args[i])).toString();
                if (arg == 'nil' || arg == last_arg) {
                    break;
                }
                last_arg = arg;
                console.log('\t[+] Dump Arg' + i + ': ' + (new ObjC.Object(args[i])).toString());
                var data = new ObjC.Object(args[i]);
                console.log(colors.green, "\t\t[-] Arugment type: ", colors.resetColor);
                console.log("\t\t\t", data.$className);
                /* Converting Byte to HexString */
                console.log(colors.green, "\t\t[-] Bytes to Hex:", colors.resetColor);
                try {
                    var arg = ObjC.Object(args[2]);
                    var length = arg.length().valueOf();
                    var bytes = arg.bytes();
                    var byteString = "";
                    for (var i = 0; i < length; i++) {
                        var byte = bytes.add(i).readU8();
                        byteString += byte.toString(16).padStart(2, '0'); // Convert to hex and pad with leading zero if needed
                    }
                    console.log("\t\t\t", byteString);
                }
                catch (err_bytes2hex) {
                    console.log(colors.red, "\t\t\t[x] Cannot convert Byte to Hex. Error: ", err_bytes2hex, colors.resetColor);
                }
                /* Converting NSData to String */
                console.log(colors.green, "\t\t[-] NSData to String: ", colors.resetColor);
                try {
                    var buf = data.bytes().readUtf8String(data.length());
                    console.log("\t\t\t", buf);
                }
                catch (err_nsdata2string) {
                    console.log(colors.red, "\t\t\t[x] Cannot convert NSData to String. Error: ", err_nsdata2string, colors.resetColor);
                }
                /* Converting NSData to Binary Data */
                console.log(colors.green, "\t\t[-] NSData to Binary Data: ", colors.resetColor);
                try {
                    var buf = data.bytes().readByteArray(data.length());
                    console.log(hexdump(buf, { ansi: true }));
                }
                catch (err_nsdata2bin) {
                    console.log(colors.red, "\t\t\t[x] Cannot convert NSData to Binary Data. Error: ", err_nsdata2bin, colors.resetColor);
                }
            }
        }
        catch (err_dump) {
            console.log(colors.red, "\t\t\t[x] Cannot dump all arugment in method . Error: ", err_dump, colors.resetColor);
        }
    }
    if (ObjC.available) {
        console.log(colors.green, "\n[*] Started: Hooking.... ", colors.resetColor);
        var classes_found = search_classes();
        for (var i = 0; i < classes_found.length; ++i) {
            var methods_found = 0;
            methods_found = search_methods(classes_found[i]);
            if (Object.keys(methods_found).length) {
                console.log(classes_found[i]);
            }
            for (var j = 0; j < methods_found.length; ++j) {
                var _className = "" + classes_found[i];
                var _methodName = "" + methods_found[j];
                var hooking = ObjC.classes[_className][_methodName];
                console.log('   ' + methods_found[j]);
                Interceptor.attach(hooking.implementation, {
                    onEnter: function (args) {
                        this._className = ObjC.Object(args[0]).toString();
                        this._methodName = ObjC.selectorAsString(args[1]);
                        console.log(colors.green, "[+] Detected call to: ", colors.resetColor);
                        console.log('   ' + this._className + ' --> ' + this._methodName);
                        console.log(colors.green, "[+] Dump all arugment in method: ", colors.resetColor);
                        print_arguments(args);
                        /* Backtrace */
                        console.log(colors.green, "[+] Backtrace: ", colors.resetColor);
                        try {
                            console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n\t"));
                        }
                        catch (err_backtrace) {
                            console.log(colors.red, "\t\t\t[x] Cannot backtrace . Error: ", err_backtrace, colors.resetColor);
                        }
                    },
                    onLeave: function (returnValues) {
                        console.log(colors.green, "[+] Return value of: ", colors.resetColor);
                        console.log('   ' + this._className + ' --> ' + this._methodName);
                        console.log(colors.green, "\t[-] Type of return value: ", colors.resetColor + Object.prototype.toString.call(returnValues));
                        console.log(colors.green, "\t[-] Return Value: ", colors.resetColor + returnValues);
                        console.log(colors.green, "\t[-] Return Value: ", colors.resetColor + JSON.stringify(returnValues, null, 2));
                    }
                });
            }
        }
        console.log(colors.green, "\n[*] Starting Intercepting", colors.resetColor);
    }
    else {
        console.log('Objective-C Runtime is not available!');
    }
}
✄
{"version":3,"file":"trace_class.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/hooks/trace_class.js"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF,SAAS,IAAI,CAAC,YAAY;IACtB,0BAA0B;IAE1B,IAAI,IAAI,CAAC,SAAS,EAClB;QACI,OAAO,CAAC,GAAG,CAAC,yBAAyB,CAAC,CAAA;QAEtC,KAAK,IAAI,SAAS,IAAI,IAAI,CAAC,OAAO,EAAE;YAChC,IAAI,KAAK,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,YAAY,CAAC,MAAM,EAAE;gBACpD,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,YAAY,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;oBAC1C,IAAI,SAAS,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,YAAY,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;wBACjE,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAA;qBACzB;iBACJ;aACJ;iBACI;gBACD,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;aAC1B;SACJ;KACJ;SACI;QACD,OAAO,CAAC,GAAG,CAAC,uCAAuC,CAAC,CAAC;KACxD;AACL,CAAC;AACD,OAAO,EAAC,IAAI,EAAC,CAAA"}
✄
/*
Description:
Search for classes
* If no strings are specified in "search_class" array, the script will print all the classes.
* If one or more strings are specified in "search_class array", the script will only print classes which contains the strings in their name.
*/
function hook(search_class) {
    //var search_class = [''];
    if (ObjC.available) {
        console.log('*** Tracing classes ***');
        for (var className in ObjC.classes) {
            if (Array.isArray(search_class) && search_class.length) {
                for (var i = 0; i < search_class.length; i++) {
                    if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
                        console.log(className);
                    }
                }
            }
            else {
                console.log(className);
            }
        }
    }
    else {
        console.log('Objective-C Runtime is not available!');
    }
}
export { hook };
✄
{"version":3,"file":"trace_method.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/hooks/trace_method.js"],"names":[],"mappings":"AAAA;;;;;;;EAOE;AAEF,MAAM,UAAU,IAAI,CAAC,YAAY,EAAC,aAAa;IAC/C,0BAA0B;IAC1B,2BAA2B;IAE3B,SAAS,aAAa,CAAC,SAAS;QAC5B,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC;QAClD,IAAI,KAAK,CAAC,OAAO,CAAC,aAAa,CAAC,IAAI,aAAa,CAAC,MAAM,EAAE,EAAE,yBAAyB;YACjF,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,aAAa,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;gBAC3C,IAAI,OAAO,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;oBAC1E,OAAO,CAAC,GAAG,CAAC,MAAM,GAAG,SAAS,CAAC,CAAC;oBAChC,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,CAAC,MAAM,EAAE,CAAC,EAAE,EAAC;wBACpC,IAAI,OAAO,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;4BACnE,OAAO,CAAC,GAAG,CAAC,KAAK,GAAG,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;yBACnC;qBACJ;iBACJ;aACJ;SACJ;aACI;YACD,OAAO,CAAC,GAAG,CAAC,MAAM,GAAG,SAAS,CAAC,CAAC;YAChC,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC;YAClD,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,CAAC,MAAM,EAAE,CAAC,EAAE,EAAC;gBACpC,OAAO,CAAC,GAAG,CAAC,KAAK,GAAG,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;aACnC;SACJ;IACL,CAAC;IAED,IAAI,IAAI,CAAC,SAAS,EAClB;QACI,OAAO,CAAC,GAAG,CAAC,qCAAqC,CAAC,CAAA;QAElD,KAAK,IAAI,SAAS,IAAI,IAAI,CAAC,OAAO,EAAE;YAChC,IAAI,KAAK,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,YAAY,CAAC,MAAM,EAAE,EAAE,yBAAyB;gBAC/E,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,YAAY,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;oBAC1C,IAAI,SAAS,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,YAAY,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;wBACjE,aAAa,CAAC,SAAS,CAAC,CAAC;qBAC5B;iBACJ;aACJ;iBACI;gBACD,aAAa,CAAC,SAAS,CAAC,CAAC;aAC5B;SACJ;QACD,OAAO,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;KAC5B;SACI;QACD,OAAO,CAAC,GAAG,CAAC,uCAAuC,CAAC,CAAC;KACxD;AACD,CAAC"}
✄
/*
Description:
Search for methods
* If no strings are specified in "search_class" nor "search_method" arrays, the script will print the methods of all the classes (frida server might stop running if there are a lot of classes).
* If one or more strings are specified in "search_class array", the script will print the methods of the classes which contains the strings in their name.
* If one or more strings are specified in "search_method" array, the script will print the classes which contains the strings in the name of one or more of their methods.
* If one or more strings are specified in "search_method" and "search_class" array, the script will print only the classes and methods that meet with the search criteria.
*/
export function hook(search_class, search_method) {
    //var search_class = [''];
    //var search_method = [''];
    function print_methods(className) {
        var methods = ObjC.classes[className].$ownMethods;
        if (Array.isArray(search_method) && search_method.length) { //search_method not empty
            for (var j = 0; j < search_method.length; j++) {
                if (methods.join(' ').toLowerCase().includes(search_method[j].toLowerCase())) {
                    console.log('[*] ' + className);
                    for (var i = 0; i < methods.length; i++) {
                        if (methods[i].toLowerCase().includes(search_method[j].toLowerCase())) {
                            console.log('   ' + methods[i]);
                        }
                    }
                }
            }
        }
        else {
            console.log('[*] ' + className);
            var methods = ObjC.classes[className].$ownMethods;
            for (var i = 0; i < methods.length; i++) {
                console.log('   ' + methods[i]);
            }
        }
    }
    if (ObjC.available) {
        console.log('*** Tracing classes and methods ***');
        for (var className in ObjC.classes) {
            if (Array.isArray(search_class) && search_class.length) { // search_class not empty
                for (var i = 0; i < search_class.length; i++) {
                    if (className.toLowerCase().includes(search_class[i].toLowerCase())) {
                        print_methods(className);
                    }
                }
            }
            else {
                print_methods(className);
            }
        }
        console.log('print end');
    }
    else {
        console.log('Objective-C Runtime is not available!');
    }
}
✄
{"version":3,"file":"iosFun.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/iosFun.ts"],"names":[],"mappings":"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"}
✄
import { disablePinning } from './pinning/boringssl_pinning.js';
import { hook } from "./hooks/hooking.js";
import { hook as reqHook } from "./NSURLRequest.js";
import { hook as printClassHook } from "./hooks/trace_class.js";
import { hook as printMethodHook } from "./hooks/trace_method.js";
import { info } from '../general/logger.js';
import { hookFuncByName, hookFunc, logData, logLengthData, logOffsetData, setMaxShowByte } from "../general/utils.js";
/**
 * 关闭ssl校验
 */
function disableSsl() {
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
function hookUrlRequest() {
    reqHook();
}
/**
 * Hook指定的ios类的方法,为空默认为所有
 * @param search_class
 * @param search_method
 */
function hookClassMethod(search_class, search_method = null) {
    hook(search_class, search_method);
}
/**
 * 打印ios类(没有包含字符时输出所有)
 * @param search_class
 */
function printClass(search_class = null) {
    printClassHook(search_class);
}
/**
 * 打印ios类的方法(没有包含字符时输出所有)
 * @param search_class
 * @param search_method
 */
function printMethod(search_class = null, search_method = null) {
    printMethodHook(search_class, search_method);
}
export function printModules() {
    var modules = Process.enumerateModules();
    for (let index = 0; index < modules.length; index++) {
        const element = modules[index];
        console.log(`name:${element.name}-path:${element.path}-size:${element.size}`);
    }
}
export function printModuleAllExports(name) {
    var module = Process.getModuleByName(name);
    if (module == null) {
        info("当前Module不存在");
        return;
    }
    var exports = module.enumerateExports();
    for (let index = 0; index < exports.length; index++) {
        const element = exports[index];
        console.log(`name:${element.name}-type:${element.type}-address:${element.address}`);
    }
}
export function printModuleAllSymbol(name) {
    var module = Process.getModuleByName(name);
    if (module == null) {
        info("当前Module不存在");
        return;
    }
    var symbols = module.enumerateSymbols();
    for (let index = 0; index < symbols.length; index++) {
        const element = symbols[index];
        console.log(`name:${element.name}-type:${element.type}-address:${element.address}`);
    }
}
export { disableSsl, hookUrlRequest, hookClassMethod, printClass, printMethod, hookFuncByName, setMaxShowByte, hookFunc, logData, logLengthData, logOffsetData };
✄
{"version":3,"file":"SSLHandshake.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/SSLHandshake.js"],"names":[],"mappings":"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"}
✄
export function SSLHandshake() {
    if (ObjC.available) {
        var className = "Security";
        var ptr = null;
        Module.enumerateExports(className, {
            onMatch: function (imp) {
                if (imp.type == "function" && imp.name == "SSLHandshake") {
                    try {
                        Interceptor.attach(ptr(imp.address), {
                            onEnter: function (args) {
                                send("Hooked SSLHandshake");
                                this.sslContext = args[0];
                            },
                            onLeave: function (retval) {
                                //errSSLServerAuthCompleted == -9841
                                send("[DEBUG] Return value: " + retval);
                                if (retval == 0xffffd98f) {
                                    send("Return value == errSSLServerAuthCompleted");
                                    var func_ptr = Module.findExportByName('Security', 'SSLHandshake');
                                    var my_function = new NativeFunction(ptr(func_ptr), 'int', ['pointer']);
                                    //OSStatus SSLHandshake (SSLContextRef context)
                                    send("Calling SSLHandshake again");
                                    retval.replace(0x00);
                                    my_function(this.sslContext);
                                }
                            }
                        });
                    }
                    catch (error) {
                        console.log("Ignoring " + imp.name + ": " + error.message);
                    }
                }
                if (imp.type == "function" && imp.name == "SSLSetSessionOption") {
                    try {
                        Interceptor.attach(ptr(imp.address), {
                            onEnter: function (args) {
                                send("Hooking SSLSetSessionOption");
                                //SSLSetSessionOption (SSLContextRef context, SSLSessionOption option, Boolean value) {
                                //kSSLSessionOptionBreakOnServerAuth = 0
                                if (args[1] == 0) {
                                    this.hooked = true;
                                }
                            },
                            onLeave: function (retval) {
                                if (this.hooked) {
                                    send("Modifying return value to noErr");
                                    retval.replace(0);
                                }
                            }
                        });
                    }
                    catch (error) {
                        console.log("Ignoring " + imp.name + ": " + error.message);
                    }
                }
                if (imp.type == "function" && imp.name == "SSLCreateContext") {
                    try {
                        Interceptor.attach(ptr(imp.address), {
                            onEnter: function (args) {
                                send("Hooking SSLCreateContext");
                                //SSLCreateContext (CFAllocatorRef alloc,SSLProtocolSide protocolSide,SSLConnectionType connectionType);
                            },
                            onLeave: function (retval) {
                                var sslContext = retval;
                                var func_ptr = Module.findExportByName('Security', 'SSLSetSessionOption');
                                var my_function = new NativeFunction(ptr(func_ptr), 'pointer', ['pointer', 'int', 'int']);
                                //kSSLSessionOptionBreakOnServerAuth = 0
                                //SSLSetSessionOption(sslContext, kSSLSessionOptionBreakOnServerAuth, true);
                                send("Calling function SSLSetSessionOption(sslContext,kSSLSessionOptionBreakOnServerAuth,true");
                                my_function(sslContext, 0, 1);
                            }
                        });
                    }
                    catch (error) {
                        console.log("Ignoring " + imp.name + ": " + error.message);
                    }
                }
            },
            onComplete: function (e) {
                send("Certificate Pinning Hooked");
            }
        });
    }
}
✄
{"version":3,"file":"boringssl_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/boringssl_pinning.js"],"names":[],"mappings":"AAAA;;GAEG;AAGH,MAAM,UAAU,cAAc,CAAE,IAAI;IAChC,IAAI;QACA,MAAM,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,CAAC;KAClD;IAAC,OAAM,GAAG,EAAE;QACT,OAAO,CAAC,GAAG,CAAC,mEAAmE,CAAC,CAAA;QAChF,MAAM,CAAC,IAAI,CAAC,oBAAoB,CAAC,CAAC;KACrC;IAED,IAAI,eAAe,GAAG,CAAC,CAAC;IACxB,IAAI,qBAAqB,CAAC;IAC1B,IAAI,oBAAoB,CAAC;IAEzB,qBAAqB,GAAG,IAAI,cAAc,CACtC,MAAM,CAAC,gBAAgB,CAAC,oBAAoB,EAAE,uBAAuB,CAAC,EACtE,MAAM,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,SAAS,CAAC,CACxC,CAAC;IAEF,oBAAoB,GAAG,IAAI,cAAc,CACrC,MAAM,CAAC,gBAAgB,CAAC,oBAAoB,EAAE,sBAAsB,CAAC,EACrE,SAAS,EAAE,CAAC,SAAS,CAAC,CACzB,CAAC;IAEF,SAAS,6CAA6C,CAAC,GAAG,EAAE,SAAS;QACjE,yBAAyB;QACzB,OAAO,CAAC,CAAC;IACb,CAAC;IAED,IAAI,mBAAmB,GAAG,IAAI,cAAc,CAAC,UAAU,GAAG,EAAE,SAAS;QACjE,6CAA6C,CAAC,GAAG,EAAE,SAAS,CAAC,CAAC;IAClE,CAAC,EAAC,KAAK,EAAC,CAAC,SAAS,EAAC,SAAS,CAAC,CAAC,CAAC;IAE/B,WAAW,CAAC,OAAO,CAAC,qBAAqB,EAAE,IAAI,cAAc,CAAC,UAAS,GAAG,EAAE,IAAI,EAAE,QAAQ;QACtF,qBAAqB,CAAC,GAAG,EAAE,IAAI,EAAE,mBAAmB,CAAC,CAAC;IAC1D,CAAC,EAAE,MAAM,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,SAAS,CAAC,CAAC,CAAC,CAAC;IAE3C,WAAW,CAAC,OAAO,CAAC,oBAAoB,EAAE,IAAI,cAAc,CAAC,UAAS,GAAG;QACrE,OAAO,qBAAqB,CAAC;IACjC,CAAC,EAAE,SAAS,EAAE,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC;AAChC,CAAC"}
✄
/* Description: iOS 13 SSL Bypass based on https://codeshare.frida.re/@federicodotta/ios13-pinning-bypass/
and https://medium.com/@macho_reverser/bypassing-certificate-pinning-on-ios-12-with-frida-809acdb875e7
 */
export function disablePinning(args) {
    try {
        Module.ensureInitialized("libboringssl.dylib");
    }
    catch (err) {
        console.log("libboringssl.dylib module not loaded. Trying to manually load it.");
        Module.load("libboringssl.dylib");
    }
    var SSL_VERIFY_NONE = 0;
    var ssl_set_custom_verify;
    var ssl_get_psk_identity;
    ssl_set_custom_verify = new NativeFunction(Module.findExportByName("libboringssl.dylib", "SSL_set_custom_verify"), 'void', ['pointer', 'int', 'pointer']);
    ssl_get_psk_identity = new NativeFunction(Module.findExportByName("libboringssl.dylib", "SSL_get_psk_identity"), 'pointer', ['pointer']);
    function custom_verify_callback_that_does_not_validate(ssl, out_alert) {
        //return SSL_VERIFY_NONE;
        return 0;
    }
    var ssl_verify_result_t = new NativeCallback(function (ssl, out_alert) {
        custom_verify_callback_that_does_not_validate(ssl, out_alert);
    }, 'int', ['pointer', 'pointer']);
    Interceptor.replace(ssl_set_custom_verify, new NativeCallback(function (ssl, mode, callback) {
        ssl_set_custom_verify(ssl, mode, ssl_verify_result_t);
    }, 'void', ['pointer', 'int', 'pointer']));
    Interceptor.replace(ssl_get_psk_identity, new NativeCallback(function (ssl) {
        return "notarealPSKidentity";
    }, 'pointer', ['pointer']));
}
✄
{"version":3,"file":"ssl_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/ssl_pinning.js"],"names":[],"mappings":"AAAA,MAAM,UAAW,UAAU;IACvB,IAAI,yBAAyB,GAAG,CAAC,IAAI,CAAC;IACtC,IAAI,kCAAkC,GAAG,CAAC,CAAC;IAC3C,IAAI,KAAK,GAAG,CAAC,CAAC;IACd,IAAI,YAAY,GAAG,IAAI,cAAc,CACjC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,cAAc,CAAC,EACnD,KAAK,EACL,CAAC,SAAS,CAAC,CACd,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,YAAY,EAAE,IAAI,cAAc,CAAC,UAAU,OAAO;QAClE,IAAI,MAAM,GAAG,YAAY,CAAC,OAAO,CAAC,CAAC;QACnC,IAAI,MAAM,IAAI,yBAAyB,EAAE;YACrC,IAAI,CAAC,wBAAwB,CAAC,CAAC;YAC/B,OAAO,YAAY,CAAC,OAAO,CAAC,CAAC;SAChC;QACD,OAAO,MAAM,CAAC;IAClB,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC;IACxB,IAAI,gBAAgB,GAAG,IAAI,cAAc,CACrC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,kBAAkB,CAAC,EACvD,SAAS,EACT,CAAC,SAAS,EAAE,KAAK,EAAE,KAAK,CAAC,CAC5B,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,gBAAgB,EAAE,IAAI,cAAc,CAAC,UAAU,KAAK,EAAE,YAAY,EAAE,cAAc;QAClG,IAAI,CAAC,4BAA4B,CAAC,CAAC;QACnC,IAAI,UAAU,GAAG,gBAAgB,CAAC,KAAK,EAAE,YAAY,EAAE,cAAc,CAAC,CAAC;QACvE,mBAAmB,CAAC,UAAU,EAAE,kCAAkC,EAAE,CAAC,CAAC,CAAC;QACvE,OAAO,UAAU,CAAC;IACtB,CAAC,EAAE,SAAS,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,KAAK,CAAC,CAAC,CAAC,CAAC;IAC1C,IAAI,mBAAmB,GAAG,IAAI,cAAc,CACxC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,qBAAqB,CAAC,EAC1D,KAAK,EACL,CAAC,SAAS,EAAE,KAAK,EAAE,MAAM,CAAC,CAC7B,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,mBAAmB,EAAE,IAAI,cAAc,CAAC,UAAU,OAAO,EAAE,MAAM,EAAE,KAAK;QACxF,IAAI,MAAM,IAAI,kCAAkC,EAAE;YAC9C,IAAI,CAAC,+BAA+B,CAAC,CAAC;YACtC,OAAO,KAAK,CAAC;SAChB;QACD,OAAO,mBAAmB,CAAC,OAAO,EAAE,MAAM,EAAE,KAAK,CAAC,CAAC;IACvD,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,MAAM,CAAC,CAAC,CAAC,CAAC;AAC3C,CAAC"}
✄
export function sslDisable() {
    var errSSLServerAuthCompleted = -9481;
    var kSSLSessionOptionBreakOnServerAuth = 0;
    var noErr = 0;
    var SSLHandshake = new NativeFunction(Module.findExportByName("Security", "SSLHandshake"), 'int', ['pointer']);
    Interceptor.replace(SSLHandshake, new NativeCallback(function (context) {
        var result = SSLHandshake(context);
        if (result == errSSLServerAuthCompleted) {
            send("Replacing SSLHandshake");
            return SSLHandshake(context);
        }
        return result;
    }, 'int', ['pointer']));
    var SSLCreateContext = new NativeFunction(Module.findExportByName("Security", "SSLCreateContext"), 'pointer', ['pointer', 'int', 'int']);
    Interceptor.replace(SSLCreateContext, new NativeCallback(function (alloc, protocolSide, connectionType) {
        send("Replacing SSLCreateContext");
        var sslContext = SSLCreateContext(alloc, protocolSide, connectionType);
        SSLSetSessionOption(sslContext, kSSLSessionOptionBreakOnServerAuth, 1);
        return sslContext;
    }, 'pointer', ['pointer', 'int', 'int']));
    var SSLSetSessionOption = new NativeFunction(Module.findExportByName("Security", "SSLSetSessionOption"), 'int', ['pointer', 'int', 'bool']);
    Interceptor.replace(SSLSetSessionOption, new NativeCallback(function (context, option, value) {
        if (option == kSSLSessionOptionBreakOnServerAuth) {
            send("Replacing SSLSetSessionOption");
            return noErr;
        }
        return SSLSetSessionOption(context, option, value);
    }, 'int', ['pointer', 'int', 'bool']));
}
✄
{"version":3,"file":"tls_12_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/tls_12_pinning.js"],"names":[],"mappings":"AAEA,0BAA0B;AAC1B,MAAM,UAAU,SAAS;IACrB;;GAED;IACH,IAAI;QACA,MAAM,CAAC,IAAI,CAAC,6BAA6B,CAAC,CAAC;KAC5C;IAAC,OAAO,CAAC,EAAE;KAEX;IACD,YAAY;IACZ,IAAI,eAAe,GAAG,CAAC,CAAC;IACxB,IAAI,yBAAyB,CAAC;IAC9B,IAAI,oBAAoB,CAAC;IAEzB;;OAEG;IACH,yBAAyB,GAAG,IAAI,cAAc,CAC1C,MAAM,CAAC,gBAAgB,CAAC,oBAAoB,EAAE,2BAA2B,CAAC,EAC1E,MAAM,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,SAAS,CAAC,CACxC,CAAC;IAEF;;OAEG;IACH,oBAAoB,GAAG,IAAI,cAAc,CACrC,MAAM,CAAC,gBAAgB,CAAC,oBAAoB,EAAE,sBAAsB,CAAC,EACrE,SAAS,EAAE,CAAC,SAAS,CAAC,CACzB,CAAC;IAEF,0DAA0D;IAC1D,SAAS,6CAA6C,CAAC,GAAG,EAAE,SAAS;QACjE,OAAO,eAAe,CAAC;IAC3B,CAAC;IAED,gDAAgD;IAChD,IAAI,mBAAmB,GAAG,IAAI,cAAc,CAAC,UAAS,GAAG,EAAE,SAAS;QAChE,6CAA6C,CAAC,GAAG,EAAE,SAAS,CAAC,CAAC;IAClE,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,EAAE,SAAS,CAAC,CAAC,CAAC;IAChC,OAAO,CAAC,GAAG,CAAC,iCAAiC,CAAC,CAAC;IAE/C,WAAW,CAAC,OAAO,CAAC,yBAAyB,EAAE,IAAI,cAAc,CAAC,UAAS,GAAG,EAAE,IAAI,EAAE,QAAQ;QAC1F,2FAA2F;QAC3F,yBAAyB,CAAC,GAAG,EAAE,IAAI,EAAE,mBAAmB,CAAC,CAAC;IAC9D,CAAC,EAAE,MAAM,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,SAAS,CAAC,CAAC,CAAC,CAAC;IAE3C,WAAW,CAAC,OAAO,CAAC,oBAAoB,EAAE,IAAI,cAAc,CAAC,UAAS,GAAG;QACrE,OAAO,qBAAqB,CAAC;IACjC,CAAC,EAAE,SAAS,EAAE,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC;AAEhC,CAAC"}
✄
/* Do the actual bypass */
export function bypassSSL() {
    /* Description: iOS 12 SSL Bypass based on blog post https://nabla-c0d3.github.io/blog/2019/05/18/ssl-kill-switch-for-ios12/
 *  Author: 	@macho_reverser
 */
    try {
        Module.load('/usr/lib/libboringssl.dylib');
    }
    catch (e) {
    }
    // Variables
    var SSL_VERIFY_NONE = 0;
    var ssl_ctx_set_custom_verify;
    var ssl_get_psk_identity;
    /* Create SSL_CTX_set_custom_verify NativeFunction
     *  Function signature https://github.com/google/boringssl/blob/7540cc2ec0a5c29306ed852483f833c61eddf133/include/openssl/ssl.h#L2294
     */
    ssl_ctx_set_custom_verify = new NativeFunction(Module.findExportByName("libboringssl.dylib", "SSL_CTX_set_custom_verify"), 'void', ['pointer', 'int', 'pointer']);
    /* Create SSL_get_psk_identity NativeFunction
     * Function signature https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_get_psk_identity
     */
    ssl_get_psk_identity = new NativeFunction(Module.findExportByName("libboringssl.dylib", "SSL_get_psk_identity"), 'pointer', ['pointer']);
    /** Custom callback passed to SSL_CTX_set_custom_verify */
    function custom_verify_callback_that_does_not_validate(ssl, out_alert) {
        return SSL_VERIFY_NONE;
    }
    /** Wrap callback in NativeCallback for frida */
    var ssl_verify_result_t = new NativeCallback(function (ssl, out_alert) {
        custom_verify_callback_that_does_not_validate(ssl, out_alert);
    }, 'int', ['pointer', 'pointer']);
    console.log("[+] Bypass successfully loaded ");
    Interceptor.replace(ssl_ctx_set_custom_verify, new NativeCallback(function (ssl, mode, callback) {
        //  |callback| performs the certificate verification. Replace this with our custom callback
        ssl_ctx_set_custom_verify(ssl, mode, ssl_verify_result_t);
    }, 'void', ['pointer', 'int', 'pointer']));
    Interceptor.replace(ssl_get_psk_identity, new NativeCallback(function (ssl) {
        return "notarealPSKidentity";
    }, 'pointer', ['pointer']));
}
✄
{"version":3,"file":"tls_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/tls_pinning.js"],"names":[],"mappings":"AAAA,MAAM,UAAW,UAAU;IACvB,IAAI,4BAA4B,CAAC;IACjC,IAAI,wBAAwB,CAAC;IAC7B,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,aAAa,EAAE,CAAC,aAAa,EAAE,CAAC,QAAQ,EAAE,CAAC;IAE/E,kGAAkG;IAC9F,wBAAwB,GAAG,IAAI,cAAc,CACzC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,0BAA0B,CAAC,EACzD,KAAK,EAAE,CAAC,SAAS,EAAE,MAAM,EAAE,SAAS,CAAC,CACxC,CAAC;IACN,sGAAsG;IAClG,4BAA4B,GAAG,IAAI,cAAc,CACjD,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,8BAA8B,CAAC,EAC7D,KAAK,EAAE,CAAC,SAAS,EAAE,MAAM,EAAE,SAAS,CAAC,CACpC,CAAC;IAEN,IAAI,aAAa,GAAG,CAAC,CAAC;IAEtB,WAAW,CAAC,OAAO,CAAC,wBAAwB,EAAE,IAAI,cAAc,CAAC,UAAS,IAAI,EAAE,MAAM,EAAE,QAAQ;QAC5F,OAAO,aAAa,CAAC;IACrB,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,EAAE,MAAM,EAAE,SAAS,CAAC,CAAC,CAAC,CAAC;IAE/C,WAAW,CAAC,OAAO,CAAC,4BAA4B,EAAE,IAAI,cAAc,CAAC,UAAS,IAAI,EAAE,MAAM,EAAE,QAAQ;QAChG,OAAO,aAAa,CAAC;IACrB,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,EAAE,MAAM,EAAE,SAAS,CAAC,CAAC,CAAC,CAAC;IAC/C,OAAO,CAAC,GAAG,CAAC,0CAA0C,CAAC,CAAC;AAC5D,CAAC"}
✄
export function tlsDisable() {
    var tls_helper_create_peer_trust;
    var nw_tls_create_peer_trust;
    var version = ObjC.classes.UIDevice.currentDevice().systemVersion().toString();
    /* OSStatus nw_tls_create_peer_trust(tls_handshake_t hdsk, bool server, SecTrustRef *trustRef); */
    nw_tls_create_peer_trust = new NativeFunction(Module.findExportByName(null, "nw_tls_create_peer_trust"), 'int', ['pointer', 'bool', 'pointer']);
    /* OSStatus tls_helper_create_peer_trust(tls_handshake_t hdsk, bool server, SecTrustRef *trustRef); */
    tls_helper_create_peer_trust = new NativeFunction(Module.findExportByName(null, "tls_helper_create_peer_trust"), 'int', ['pointer', 'bool', 'pointer']);
    var errSecSuccess = 0;
    Interceptor.replace(nw_tls_create_peer_trust, new NativeCallback(function (hdsk, server, trustRef) {
        return errSecSuccess;
    }, 'int', ['pointer', 'bool', 'pointer']));
    Interceptor.replace(tls_helper_create_peer_trust, new NativeCallback(function (hdsk, server, trustRef) {
        return errSecSuccess;
    }, 'int', ['pointer', 'bool', 'pointer']));
    console.log("TLS certificate validation bypass active");
}
✄
{"version":3,"file":"universal_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/pinning/universal_pinning.js"],"names":[],"mappings":"AAAA,yBAAyB;AACzB,IAAI,qBAAqB,GAAG,EAAE,CAAC;AAE/B,cAAc;AACd,IAAI,SAAS,GAAG,IAAI,cAAc,CAC9B,MAAM,CAAC,eAAe,CAAC,UAAU,EAAE,WAAW,CAAC,EAAE,QAAQ,EAAE,CAAC,SAAS,EAAE,QAAQ,EAAE,SAAS,CAAC,CAC9F,CAAC;AAEF,0BAA0B;AAC1B,SAAS,UAAU,CAAC,MAAM,EAAE,YAAY;IACpC,IAAI,IAAI,GAAG,MAAM,CAAC,KAAK,CAAC,EAAE,CAAC,CAAC;IAC5B,SAAS,CAAC,MAAM,EAAE,YAAY,EAAE,IAAI,CAAC,CAAC;IACtC,IAAI,SAAS,GAAG,IAAI,CAAC,aAAa,CAAC,EAAE,CAAC,CAAC;IACvC,OAAO,WAAW,CAAC,SAAS,CAAC,CAAC;AAClC,CAAC;AAED,4CAA4C;AAC5C,SAAS,WAAW,CAAC,MAAM;IACvB,IAAI,SAAS,GAAG,IAAI,UAAU,CAAC,MAAM,CAAC,CAAC;IACvC,IAAI,CAAC,GAAG,EAAE,CAAC;IACX,KAAI,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,SAAS,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;QACtC,CAAC,IAAI,CAAC,GAAG,GAAG,CAAC,SAAS,CAAC,CAAC,CAAC,GAAG,IAAI,CAAC,CAAC,QAAQ,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC;KAC7D;IACD,OAAO,CAAC,CAAC;AACb,CAAC;AAED,4CAA4C;AAC5C,IAAI,iCAAiC,GAAG,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,+BAA+B,CAAC,CAAC;AAE7G,kCAAkC;AAClC,IAAI,6BAA6B,GAAE,IAAI,cAAc,CACjD,iCAAiC,EAAE,SAAS,EAAE,CAAC,SAAS,EAAE,SAAS,EAAE,QAAQ,CAAC,CACjF,CAAC;AAEF,yBAAyB;AACzB,MAAM,UAAU,iBAAiB;IAC7B,uCAAuC;IACvC,WAAW,CAAC,OAAO,CAAC,iCAAiC,EAAE,IAAI,cAAc,CAAC,UAAS,SAAS,EAAE,WAAW,EAAE,UAAU;QACjH,IAAI,IAAI,GAAG,UAAU,CAAC,WAAW,EAAE,UAAU,CAAC,CAAC;QAC/C,IAAI,qBAAqB,CAAC,OAAO,CAAC,IAAI,CAAC,GAAG,CAAC,EAAE;YACzC,qBAAqB,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;YACjC,IAAI,CAAC,IAAI,EAAE,WAAW,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC,CAAC;SACrD;QACD,OAAO,6BAA6B,CAAC,SAAS,EAAE,WAAW,EAAE,UAAU,CAAC,CAAC;IAC7E,CAAC,EAAE,SAAS,EAAE,CAAC,SAAS,EAAE,SAAS,EAAE,QAAQ,CAAC,CAAC,CAAC,CAAC;IACjD,IAAI,CAAC,gDAAgD,CAAC,CAAC;AAC3D,CAAC"}
✄
// Collected certificates
var collectedCertificates = [];
// CC_SHA256()
var CC_SHA256 = new NativeFunction(Module.getExportByName('Security', 'CC_SHA256'), 'uint64', ['pointer', 'uint64', 'pointer']);
// Calculate a SHA256 hash
function calcSHA256(buffer, bufferLength) {
    var hash = Memory.alloc(32);
    CC_SHA256(buffer, bufferLength, hash);
    var hashBytes = hash.readByteArray(32);
    return toHexString(hashBytes);
}
// Convert a byte array buffer to hex string
function toHexString(buffer) {
    var byteArray = new Uint8Array(buffer);
    var s = '';
    for (var i = 0; i < byteArray.length; i++) {
        s += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2);
    }
    return s;
}
// Get SecCertificateCreateWithBytes pointer
var SecCertificateCreateWithBytes_prt = Module.findExportByName("Security", "SecCertificateCreateWithBytes");
// SecCertificateCreateWithBytes()
var SecCertificateCreateWithBytes = new NativeFunction(SecCertificateCreateWithBytes_prt, "pointer", ["pointer", "pointer", "uint64"]);
// Catch the certificates
export function catchCertificates() {
    // Hook SecCertificateCreateWithBytes()
    Interceptor.replace(SecCertificateCreateWithBytes_prt, new NativeCallback(function (something, certAddress, certLength) {
        var hash = calcSHA256(certAddress, certLength);
        if (collectedCertificates.indexOf(hash) < 0) {
            collectedCertificates.push(hash);
            send(hash, certAddress.readByteArray(certLength));
        }
        return SecCertificateCreateWithBytes(something, certAddress, certLength);
    }, "pointer", ["pointer", "pointer", "uint64"]));
    send("[*] SecCertificateCreateWithBytes(...) hooked!");
}
✄
{"version":3,"file":"test.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/test.js"],"names":[],"mappings":"AAAA,MAAM,UAAU,IAAI;IAChB,IAAI,GAAG,GAAG,IAAI,CAAC,OAAO,CAAC,kBAAkB,CAAC,CAAC;IAC3C,IAAG,GAAG,IAAE,IAAI,EAAC;QACT,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;KAC1B;IACD,oCAAoC;IACpC,8DAA8D;IAC9D,gDAAgD;IAChD,kCAAkC;IAClC,+DAA+D;IAC/D,WAAW;IACX,wDAAwD;IACxD,IAAI;IACJ,uCAAuC;IACvC,iEAAiE;IACjE,mDAAmD;IACnD,kCAAkC;IAClC,+DAA+D;IAC/D,WAAW;IACX,wDAAwD;IACxD,IAAI;IACJ,OAAO,CAAC,GAAG,CAAC,GAAG,GAAG,WAAW,GAAG,CAAC,MAAM,EAAE,CAAC,CAAC,CAAA,EAAE;IAC7C,KAAI,IAAI,GAAG,IAAI,GAAG,CAAC,MAAM,EAAC;QACtB,OAAO,CAAC,GAAG,CAAC,OAAO,GAAG,WAAW,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC;KACvD;IACD,OAAO,CAAC,GAAG,CAAC,GAAG,GAAG,kBAAkB,GAAG,CAAC,MAAM,CAAC,MAAM,EAAE,CAAC,CAAC,CAAA,EAAE;IAC3D,KAAK,IAAI,KAAK,GAAG,CAAC,EAAE,KAAK,GAAG,GAAG,CAAC,MAAM,CAAC,MAAM,EAAE,KAAK,EAAE,EAAE;QACpD,MAAM,OAAO,GAAG,GAAG,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC,CAAC;QACvC,2BAA2B;QAC3B,wDAAwD;QACxD,IAAI;QACJ,OAAO,CAAC,GAAG,CAAC,QAAQ,OAAO,CAAC,MAAM,IAAI,OAAO,EAAE,CAAC,CAAC;KACpD;AACL,CAAC"}
✄
export function test() {
    var cls = ObjC.classes['WAPushController'];
    if (cls == null) {
        console.log('is null');
    }
    // console.log(`${cls}-$methods`);//
    // for (let index = 0; index < cls.$methods.length; index++) {
    //     const element = cls[cls.$methods[index]];
    //     // for(var key in element){
    //     //     console.log(`key:${key}--value:${element[key]}`);
    //     // }
    //     console.log(`name:${element.symbol}-${element}`);
    // }
    // console.log(`${cls}-$ownMethods`);//
    // for (let index = 0; index < cls.$ownMethods.length; index++) {
    //     const element = cls[cls.$ownMethods[index]];
    //     // for(var key in element){
    //     //     console.log(`key:${key}--value:${element[key]}`);
    //     // }
    //     console.log(`name:${element.symbol}-${element}`);
    // }
    console.log(`${cls}-$ivars:${cls.$ivars}`); //
    for (var key in cls.$ivars) {
        console.log(`key:${key}--value:${cls.$ivars[key]}`);
    }
    console.log(`${cls}-$ivars.param1:${cls.$ivars.param1}`); //
    for (let index = 0; index < cls.$ivars.length; index++) {
        const element = cls[cls.$ivars[index]];
        // for(var key in element){
        //     console.log(`key:${key}--value:${element[key]}`);
        // }
        console.log(`name:${element.symbol}-${element}`);
    }
}