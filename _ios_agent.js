📦
310 /ios/index.js.map
362 /ios/index.js
4063 /ios/NSURLRequest.js.map
5566 /ios/NSURLRequest.js
6586 /ios/hooks/hooking.js.map
8054 /ios/hooks/hooking.js
775 /ios/hooks/trace_class.js.map
967 /ios/hooks/trace_class.js
1804 /ios/hooks/trace_method.js.map
2507 /ios/hooks/trace_method.js
876 /ios/iosFun.js.map
1117 /ios/iosFun.js
2020 /ios/ssl_pinning.js.map
2080 /ios/ssl_pinning.js
✄
{"version":3,"file":"index.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/index.ts"],"names":[],"mappings":"AAAA,OAAO,EAAY,eAAe,EAAc,MAAM,aAAa,CAAA;AAEnE,sDAAsD;AACtD,oCAAoC;AACpC,2DAA2D;AAC3D,eAAe,CAAC,CAAC,QAAQ,CAAC,EAAC,CAAC,4BAA4B,CAAC,CAAC,CAAC;AAC3D,uBAAuB;AACvB,8CAA8C;AAC9C,+BAA+B"}
✄
import { hookClassMethod } from "./iosFun.js";
//printClass(['enc','mbedtls','gcm','curve','25519']);
//hookClassMethod(['25519','json']);
//hookClassMethod(['NSJSONSerialization','INJSONEncoder']);
hookClassMethod(['NSData'], ['URLSafeBase64EncodedString']);
//printClass(['json']);
//printMethod(null,['mbedtls','gcm','setkey'])
//printMethod(null,['base64']);
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
{"version":3,"file":"hooking.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/hooks/hooking.js"],"names":[],"mappings":"AAAA;;;;;;;EAOE;AACF,MAAM,UAAU,IAAI,CAAC,YAAY,EAAC,aAAa;IAC/C,0BAA0B;IAC1B,2BAA2B;IAEvB,IAAI,MAAM,GAAG;QACT,YAAY,EAAE,SAAS;QACvB,OAAO,EAAE,UAAU;QACnB,QAAQ,EAAE,UAAU;QACpB,KAAK,EAAE,UAAU;KACpB,CAAA;IAED,SAAS,cAAc,CAAC,SAAS;QAC7B,IAAI,aAAa,GAAG,EAAE,CAAC;QACvB,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC;QAClD,IAAI,KAAK,CAAC,OAAO,CAAC,aAAa,CAAC,IAAI,aAAa,CAAC,MAAM,EAAE,EAAE,yBAAyB;YACjF,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,aAAa,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;gBAC3C,IAAI,OAAO,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;oBAC1E,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,CAAC,MAAM,EAAE,CAAC,EAAE,EAAC;wBACpC,IAAI,OAAO,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;4BACnE,aAAa,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;yBAClC;qBACJ;iBACJ;aACJ;SACJ;aACI;YACD,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC;YAClD,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,CAAC,MAAM,EAAE,CAAC,EAAE,EAAC;gBACpC,aAAa,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;aAClC;SACJ;QACD,OAAO,aAAa,CAAC;IACzB,CAAC;IAED,SAAS,cAAc;QACnB,IAAI,aAAa,GAAG,EAAE,CAAC;QACvB,KAAK,IAAI,SAAS,IAAI,IAAI,CAAC,OAAO,EAAE;YAChC,IAAI,KAAK,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,YAAY,CAAC,MAAM,EAAE;gBACpD,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,YAAY,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;oBAC1C,IAAI,SAAS,CAAC,WAAW,EAAE,CAAC,QAAQ,CAAC,YAAY,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAC,EAAE;wBACjE,aAAa,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;qBACjC;iBACJ;aACJ;SACJ;QACD,OAAO,aAAa,CAAC;IACzB,CAAC;IAED;;;;;;OAMG;IACH,SAAS,eAAe,CAAC,IAAI;QACzB,IAAI;YACA,IAAI,CAAC,GAAG,GAAG,CAAC;YACZ,IAAI,QAAQ,GAAG,EAAE,CAAC;YAClB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,CAAC,EAAE,EAAE,CAAC,EAAE;gBACxB,IAAI,GAAG,GAAG,CAAC,IAAI,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC;gBAChD,IAAI,GAAG,IAAI,KAAK,IAAI,GAAG,IAAI,QAAQ,EAAE;oBACjC,MAAM;iBACT;gBACD,QAAQ,GAAG,GAAG,CAAC;gBACf,OAAO,CAAC,GAAG,CAAC,gBAAgB,GAAG,CAAC,GAAG,IAAI,GAAG,CAAC,IAAI,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC,CAAC;gBACjF,IAAI,IAAI,GAAG,IAAI,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC;gBACpC,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,yBAAyB,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;gBACxE,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAE,IAAI,CAAC,UAAU,CAAC,CAAC;gBACvC,kCAAkC;gBAClC,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,uBAAuB,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;gBACtE,IAAI;oBACA,IAAI,GAAG,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC/B,IAAI,MAAM,GAAG,GAAG,CAAC,MAAM,EAAE,CAAC,OAAO,EAAE,CAAC;oBACpC,IAAI,KAAK,GAAG,GAAG,CAAC,KAAK,EAAE,CAAC;oBACxB,IAAI,UAAU,GAAG,EAAE,CAAC;oBACpB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,MAAM,EAAE,CAAC,EAAE,EAAE;wBAC7B,IAAI,IAAI,GAAG,KAAK,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,MAAM,EAAE,CAAC;wBACjC,UAAU,IAAI,IAAI,CAAC,QAAQ,CAAC,EAAE,CAAC,CAAC,QAAQ,CAAC,CAAC,EAAE,GAAG,CAAC,CAAC,CAAC,qDAAqD;qBAC1G;oBACD,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAE,UAAU,CAAC,CAAC;iBACrC;gBAAC,OAAO,aAAa,EAAE;oBACpB,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,+CAA+C,EAAE,aAAa,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;iBAC9G;gBACD,iCAAiC;gBACjC,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,4BAA4B,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;gBAC3E,IAAI;oBACA,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,EAAE,CAAC,cAAc,CAAC,IAAI,CAAC,MAAM,EAAE,CAAC,CAAC;oBACrD,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAE,GAAG,CAAC,CAAC;iBAC9B;gBAAC,OAAO,iBAAiB,EAAE;oBACxB,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,oDAAoD,EAAE,iBAAiB,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;iBACvH;gBACD,sCAAsC;gBACtC,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,iCAAiC,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;gBAChF,IAAI;oBACA,IAAI,GAAG,GAAG,IAAI,CAAC,KAAK,EAAE,CAAC,aAAa,CAAC,IAAI,CAAC,MAAM,EAAE,CAAC,CAAC;oBACpD,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,GAAG,EAAE,EAAE,IAAI,EAAE,IAAI,EAAE,CAAC,CAAC,CAAC;iBAC7C;gBAAC,OAAO,cAAc,EAAE;oBACrB,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,yDAAyD,EAAE,cAAc,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;iBACzH;aACJ;SACJ;QAAC,OAAO,QAAQ,EAAE;YACf,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,wDAAwD,EAAE,QAAQ,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;SAClH;IACL,CAAC;IAED,IAAI,IAAI,CAAC,SAAS,EAClB;QACI,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAC,6BAA6B,EAAC,MAAM,CAAC,UAAU,CAAC,CAAC;QAC1E,IAAI,aAAa,GAAG,cAAc,EAAE,CAAC;QACrC,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,aAAa,CAAC,MAAM,EAAE,EAAE,CAAC,EAAE;YAC3C,IAAI,aAAa,GAAG,CAAC,CAAC;YACtB,aAAa,GAAG,cAAc,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC;YAEjD,IAAI,MAAM,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC,MAAM,EAAC;gBAClC,OAAO,CAAC,GAAG,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC;aACjC;YACD,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,aAAa,CAAC,MAAM,EAAE,EAAE,CAAC,EAAE;gBAC3C,IAAI,UAAU,GAAG,EAAE,GAAG,aAAa,CAAC,CAAC,CAAC,CAAC;gBACvC,IAAI,WAAW,GAAG,EAAE,GAAG,aAAa,CAAC,CAAC,CAAC,CAAC;gBACxC,IAAI,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,UAAU,CAAC,CAAC,WAAW,CAAC,CAAC;gBACpD,OAAO,CAAC,GAAG,CAAC,KAAK,GAAG,aAAa,CAAC,CAAC,CAAC,CAAC,CAAC;gBAEtC,WAAW,CAAC,MAAM,CAAC,OAAO,CAAC,cAAc,EAAE;oBACvC,OAAO,EAAE,UAAU,IAAI;wBACnB,IAAI,CAAC,UAAU,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC;wBAClD,IAAI,CAAC,WAAW,GAAG,IAAI,CAAC,gBAAgB,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC;wBAClD,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,wBAAwB,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;wBACvE,OAAO,CAAC,GAAG,CAAC,KAAK,GAAG,IAAI,CAAC,UAAU,GAAG,OAAO,GAAG,IAAI,CAAC,WAAW,CAAC,CAAC;wBAClE,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,mCAAmC,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;wBAClF,eAAe,CAAC,IAAI,CAAC,CAAC;wBACtB,eAAe;wBACf,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,iBAAiB,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;wBAChE,IAAI;4BACA,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,SAAS,CAAC,IAAI,CAAC,OAAO,EAAE,UAAU,CAAC,QAAQ,CAAC,CAAC,GAAG,CAAC,WAAW,CAAC,WAAW,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,CAAC;yBAC9G;wBAAC,OAAO,aAAa,EAAE;4BACpB,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,EAAE,sCAAsC,EAAE,aAAa,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;yBACrG;oBACL,CAAC;oBACD,OAAO,EAAE,UAAS,YAAY;wBAC1B,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAC,uBAAuB,EAAC,MAAM,CAAC,UAAU,CAAC,CAAC;wBACpE,OAAO,CAAC,GAAG,CAAC,KAAK,GAAG,IAAI,CAAC,UAAU,GAAG,OAAO,GAAG,IAAI,CAAC,WAAW,CAAC,CAAC;wBAClE,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAC,8BAA8B,EAAC,MAAM,CAAC,UAAU,GAAG,MAAM,CAAC,SAAS,CAAC,QAAQ,CAAC,IAAI,CAAC,YAAY,CAAC,CAAC,CAAC;wBAC1H,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAC,sBAAsB,EAAC,MAAM,CAAC,UAAU,GAAG,YAAY,CAAC,CAAC;wBAClF,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAE,sBAAsB,EAAE,MAAM,CAAC,UAAU,GAAG,IAAI,CAAC,SAAS,CAAC,YAAY,EAAE,IAAI,EAAE,CAAC,CAAC,CAAC,CAAC;oBACjH,CAAC;iBACJ,CAAC,CAAC;aACN;SACJ;QACD,OAAO,CAAC,GAAG,CAAC,MAAM,CAAC,KAAK,EAAC,6BAA6B,EAAE,MAAM,CAAC,UAAU,CAAC,CAAC;KAC9E;SACI;QACD,OAAO,CAAC,GAAG,CAAC,uCAAuC,CAAC,CAAC;KACxD;AACL,CAAC"}
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
{"version":3,"file":"iosFun.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/iosFun.ts"],"names":[],"mappings":"AAAA,OAAO,EAAC,OAAO,IAAI,WAAW,EAAC,MAAM,kBAAkB,CAAA;AACvD,OAAO,EAAE,IAAI,EAAE,MAAM,oBAAoB,CAAC;AAC1C,OAAO,EAAE,IAAI,IAAI,OAAO,EAAE,MAAM,mBAAmB,CAAC;AACpD,OAAO,EAAE,IAAI,IAAI,cAAc,EAAE,MAAM,wBAAwB,CAAC;AAChE,OAAO,EAAE,IAAI,IAAI,eAAe,EAAE,MAAM,yBAAyB,CAAC;AAClE;;GAEG;AACH,SAAS,UAAU;IACf,WAAW,EAAE,CAAC;AAClB,CAAC;AACD;;GAEG;AACH,SAAS,cAAc;IACnB,OAAO,EAAE,CAAC;AACd,CAAC;AACD;;;;GAIG;AACH,SAAS,eAAe,CAAC,YAAqB,EAAC,gBAA4B,IAAI;IAC3E,IAAI,CAAC,YAAY,EAAC,aAAa,CAAC,CAAC;AACrC,CAAC;AACD;;;GAGG;AACH,SAAS,UAAU,CAAC,eAA2B,IAAI;IAC/C,cAAc,CAAC,YAAY,CAAC,CAAC;AACjC,CAAC;AACD;;;;GAIG;AACH,SAAS,WAAW,CAAC,eAA2B,IAAI,EAAC,gBAA4B,IAAI;IACjF,eAAe,CAAC,YAAY,EAAC,aAAa,CAAC,CAAC;AAChD,CAAC;AACD,OAAO,EAAC,UAAU,EAAC,cAAc,EAAC,eAAe,EAAC,UAAU,EAAC,WAAW,EAAC,CAAA"}
✄
import { disable as ssl_disable } from './ssl_pinning.js';
import { hook } from "./hooks/hooking.js";
import { hook as reqHook } from "./NSURLRequest.js";
import { hook as printClassHook } from "./hooks/trace_class.js";
import { hook as printMethodHook } from "./hooks/trace_method.js";
/**
 * 关闭ssl校验
 */
function disableSsl() {
    ssl_disable();
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
export { disableSsl, hookUrlRequest, hookClassMethod, printClass, printMethod };
✄
{"version":3,"file":"ssl_pinning.js","sourceRoot":"D:/gitCode/frida-agent-example/","sources":["ios/ssl_pinning.ts"],"names":[],"mappings":"AAAA,SAAS,UAAU;IACf,IAAI,yBAAyB,GAAG,CAAC,IAAI,CAAC;IACtC,IAAI,kCAAkC,GAAG,CAAC,CAAC;IAC3C,IAAI,KAAK,GAAG,CAAC,CAAC;IACd,IAAI,cAAc,GAAC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,cAAc,CAAC,CAAC;IACvE,IAAG,cAAc,IAAE,IAAI,EAAC;QACpB,OAAO;KACV;IACD,IAAI,YAAY,GAAG,IAAI,cAAc,CACjC,cAAc,EACd,KAAK,EACL,CAAC,SAAS,CAAC,CACd,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,YAAY,EAAE,IAAI,cAAc,CAAC,UAAU,OAAO;QAClE,IAAI,MAAM,GAAG,YAAY,CAAC,OAAO,CAAC,CAAC;QACnC,IAAI,MAAM,IAAI,yBAAyB,EAAE;YACrC,IAAI,CAAC,wBAAwB,CAAC,CAAC;YAC/B,OAAO,YAAY,CAAC,OAAO,CAAC,CAAC;SAChC;QACD,OAAO,MAAM,CAAC;IAClB,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC;IACxB,IAAI,kBAAkB,GAAC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,kBAAkB,CAAC,CAAC;IAC/E,IAAG,kBAAkB,IAAE,IAAI,EAAC;QACxB,OAAO;KACV;IACD,IAAI,gBAAgB,GAAG,IAAI,cAAc,CACrC,kBAAkB,EAClB,SAAS,EACT,CAAC,SAAS,EAAE,KAAK,EAAE,KAAK,CAAC,CAC5B,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,gBAAgB,EAAE,IAAI,cAAc,CAAC,UAAU,KAAK,EAAE,YAAY,EAAE,cAAc;QAClG,IAAI,CAAC,4BAA4B,CAAC,CAAC;QACnC,IAAI,UAAU,GAAG,gBAAgB,CAAC,KAAK,EAAE,YAAY,EAAE,cAAc,CAAC,CAAC;QACvE,mBAAmB,CAAC,UAAU,EAAE,kCAAkC,EAAE,CAAC,CAAC,CAAC;QACvE,OAAO,UAAU,CAAC;IACtB,CAAC,EAAE,SAAS,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,KAAK,CAAC,CAAC,CAAC,CAAC;IAC1C,IAAI,qBAAqB,GAAC,MAAM,CAAC,gBAAgB,CAAC,UAAU,EAAE,qBAAqB,CAAC,CAAC;IACrF,IAAG,qBAAqB,IAAE,IAAI,EAAC;QAC3B,OAAO;KACV;IACD,IAAI,mBAAmB,GAAG,IAAI,cAAc,CACxC,qBAAqB,EACrB,KAAK,EACL,CAAC,SAAS,EAAE,KAAK,EAAE,MAAM,CAAC,CAC7B,CAAC;IACF,WAAW,CAAC,OAAO,CAAC,mBAAmB,EAAE,IAAI,cAAc,CAAC,UAAU,OAAO,EAAE,MAAM,EAAE,KAAK;QACxF,IAAI,MAAM,IAAI,kCAAkC,EAAE;YAC9C,IAAI,CAAC,+BAA+B,CAAC,CAAC;YACtC,OAAO,KAAK,CAAC;SAChB;QACD,OAAO,mBAAmB,CAAC,OAAO,EAAE,MAAM,EAAE,KAAK,CAAC,CAAC;IACvD,CAAC,EAAE,KAAK,EAAE,CAAC,SAAS,EAAE,KAAK,EAAE,MAAM,CAAC,CAAC,CAAC,CAAC;IACvC,YAAY,GAAC,IAAI,CAAC;AACtB,CAAC;AACD,IAAI,YAAY,GAAC,KAAK,CAAC;AACvB,SAAS,OAAO;IACZ,IAAG,YAAY,EAAC;QACZ,OAAO;KACV;IACD,UAAU,EAAE,CAAC;AACjB,CAAC;AACD,OAAO,EAAC,OAAO,EAAC,CAAC"}
✄
function disableImp() {
    var errSSLServerAuthCompleted = -9481;
    var kSSLSessionOptionBreakOnServerAuth = 0;
    var noErr = 0;
    var exSSLHandshake = Module.findExportByName("Security", "SSLHandshake");
    if (exSSLHandshake == null) {
        return;
    }
    var SSLHandshake = new NativeFunction(exSSLHandshake, 'int', ['pointer']);
    Interceptor.replace(SSLHandshake, new NativeCallback(function (context) {
        var result = SSLHandshake(context);
        if (result == errSSLServerAuthCompleted) {
            send("Replacing SSLHandshake");
            return SSLHandshake(context);
        }
        return result;
    }, 'int', ['pointer']));
    var exSSLCreateContext = Module.findExportByName("Security", "SSLCreateContext");
    if (exSSLCreateContext == null) {
        return;
    }
    var SSLCreateContext = new NativeFunction(exSSLCreateContext, 'pointer', ['pointer', 'int', 'int']);
    Interceptor.replace(SSLCreateContext, new NativeCallback(function (alloc, protocolSide, connectionType) {
        send("Replacing SSLCreateContext");
        var sslContext = SSLCreateContext(alloc, protocolSide, connectionType);
        SSLSetSessionOption(sslContext, kSSLSessionOptionBreakOnServerAuth, 1);
        return sslContext;
    }, 'pointer', ['pointer', 'int', 'int']));
    var exSSLSetSessionOption = Module.findExportByName("Security", "SSLSetSessionOption");
    if (exSSLSetSessionOption == null) {
        return;
    }
    var SSLSetSessionOption = new NativeFunction(exSSLSetSessionOption, 'int', ['pointer', 'int', 'bool']);
    Interceptor.replace(SSLSetSessionOption, new NativeCallback(function (context, option, value) {
        if (option == kSSLSessionOptionBreakOnServerAuth) {
            send("Replacing SSLSetSessionOption");
            return noErr;
        }
        return SSLSetSessionOption(context, option, value);
    }, 'int', ['pointer', 'int', 'bool']));
    isDisableImp = true;
}
var isDisableImp = false;
function disable() {
    if (isDisableImp) {
        return;
    }
    disableImp();
}
export { disable };