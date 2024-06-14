function disableImp(){
    var errSSLServerAuthCompleted = -9481;
    var kSSLSessionOptionBreakOnServerAuth = 0;
    var noErr = 0;
    var exSSLHandshake=Module.findExportByName("Security", "SSLHandshake");
    if(exSSLHandshake==null){
        return;
    }
    var SSLHandshake = new NativeFunction(
        exSSLHandshake,
        'int',
        ['pointer']
    );
    Interceptor.replace(SSLHandshake, new NativeCallback(function (context) {
        var result = SSLHandshake(context);
        if (result == errSSLServerAuthCompleted) {
            send("Replacing SSLHandshake");
            return SSLHandshake(context);
        }
        return result;
    }, 'int', ['pointer']));
    var exSSLCreateContext=Module.findExportByName("Security", "SSLCreateContext");
    if(exSSLCreateContext==null){
        return;
    }
    var SSLCreateContext = new NativeFunction(
        exSSLCreateContext,
        'pointer',
        ['pointer', 'int', 'int']
    );
    Interceptor.replace(SSLCreateContext, new NativeCallback(function (alloc, protocolSide, connectionType) {
        send("Replacing SSLCreateContext");
        var sslContext = SSLCreateContext(alloc, protocolSide, connectionType);
        SSLSetSessionOption(sslContext, kSSLSessionOptionBreakOnServerAuth, 1);
        return sslContext;
    }, 'pointer', ['pointer', 'int', 'int']));
    var exSSLSetSessionOption=Module.findExportByName("Security", "SSLSetSessionOption");
    if(exSSLSetSessionOption==null){
        return;
    }
    var SSLSetSessionOption = new NativeFunction(
        exSSLSetSessionOption,
        'int',
        ['pointer', 'int', 'bool']
    );
    Interceptor.replace(SSLSetSessionOption, new NativeCallback(function (context, option, value) {
        if (option == kSSLSessionOptionBreakOnServerAuth) {
            send("Replacing SSLSetSessionOption");
            return noErr;
        }
        return SSLSetSessionOption(context, option, value);
    }, 'int', ['pointer', 'int', 'bool']));
    isDisableImp=true;
}
var isDisableImp=false;
function disable(){
    if(isDisableImp){
        return;
    }
    disableImp();
}
export {disable};