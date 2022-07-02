import { log } from "./logger";
<<<<<<< HEAD
//
function test(){
    /*Interceptor.attach(Module.getExportByName("libil2cpp.so","__android_log_print"),{
        onEnter(args) {
            log("args:"+args);
        },
        onLeave(retval) {
            log("onLeave:"+retval);
        }
      });*/
      Java.perform(()=>{
        var sy=Java.use("java.lang.Runtime");
        sy["loadLibrary"].overload('java.lang.String').implementation=function(name:string){
          log("loadLibrary:"+name);
          var b= this.loadLibrary(name);
          if(name.indexOf('libmain.so')>=0){
            var main=Process.getModuleByName("libmain.so");
            log("libmain.so:"+main);
            Interceptor.attach(main.getExportByName("JNI_OnLoad"),{
              onEnter:function(){
                log("libmain-JNI_OnLoad");
              },onLeave:function(){
                log("libmain-JNI_OnLeave");
              }
=======
//import "frida-il2cpp-bridge";
//frida -U 修仙家族模拟器 --no-pause -l _agent.js
//com.cccs.xxjz
//
//get_self_process_name()获取当前运行进程包名
//参考：https://github.com/lasting-yang/frida_dump/blob/master/dump_dex_class.js
/*function get_self_process_name()
{
	var openPtr = Module.getExportByName('libc.so', 'open');
	var open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);
>>>>>>> cf33404de981c0bc934dad46b2bb28a457745671

            });
            var me=Process.getModuleByName("libil2cpp.so");
            log("me:"+me);
            var mex=me.enumerateExports();
            for(var i=0;i<mex.length;i++){
              log("mex["+i+"]:"+mex[i]);
            }
          }
          return b;
        }
      });
      /*var base=Module.getBaseAddress("libil2cpp.so");
      log("base:"+base);
      var es=Process.getModuleByName("libil2cpp.so").enumerateExports();
      for (var i=0;i<es.length;i++){
        log(es[i].name);
      }
      log('完成');*/
}
function test1(){
    Java.perform(()=>{
      var sy=Java.use("com.unity3d.player.UnityPlayer");
      sy["loadNative"].overload('java.lang.String').implementation=function(name:string){
        log("loadNative:"+name);
        var b= this.loadNative(name);
        return b;
      }
      sy["$init"] .overload('android.content.Context', 'com.unity3d.player.IUnityPlayerLifecycleEvents').implementation=function(a:any,b:any){
        log("init:"+a+"-"+b);
        var b= this.$init(a,b);
        /*var base=Module.getBaseAddress("libil2cpp.so");
        log("base:"+base);
        var es=Process.getModuleByName("libil2cpp.so").enumerateExports();
        for (var i=0;i<es.length;i++){
          log(es[i].name);
        }
        log('完成');*/
        var ba=Module.findExportByName("libil2cpp.so","JNI_OnLoad");
        var ad=ba?.sub(0x374BAC).add(0x39B698);
        log("ad:"+ad)
        Interceptor.attach(<NativePointerValue>ad,{
          onEnter:function(){
            log("onEnter:"+this+"-args"+arguments);
          },
          onLeave:function(par){
            log("onLeave:"+par);
          }
        });
        return b;
      }
    });
}
function test2(){
  var a=0;
  Java.perform(function () {
    function frida_Memory(pattern:string) {
        //log("头部标识:" + pattern);
        //枚举内存段的属性,返回指定内存段属性地址
        var addrArray = Process.enumerateRanges("r--");
        for (var i = 0; i < addrArray.length; i++) {
            var addr = addrArray[i];
            Memory.scan(addr.base, addr.size, pattern,
                {
                    onMatch: function (address, size) {
                        log('搜索到 ' + pattern + " 地址是:" + address.toString());
                        log(hexdump(address,
                            {
                                offset: 0,
                                length: 64,
                                header: true,
                                ansi: true
                            }));
                        //0x108，0x10C如果不行，换0x100，0x104
                        var DefinitionsOffset = address.add( 0x100);
                        var DefinitionsOffset_size = DefinitionsOffset.readInt();

                        var DefinitionsCount = address.add(0x104);
                        var DefinitionsCount_size = DefinitionsCount.readInt();

                        //根据两个偏移得出global-metadata大小
                        var global_metadata_size = DefinitionsOffset_size + DefinitionsCount_size
                        log("大小："+global_metadata_size);
                        if (global_metadata_size > 0) {
                            a=a+1;
                            var file = new File("/storage/emulated/0/Download/global-metadata"+a+".dat", "wb");
                            file.write(<ArrayBuffer>address.readByteArray(global_metadata_size));
                            file.flush();
                            file.close();
                            log('导出完毕...');
                        }
                    },
                    onComplete: function () {
                        
                    }
                }
            );
        }
        //log("搜索完毕");
    }
<<<<<<< HEAD

    setInterval(function () {
        frida_Memory("AF 1B B1 FA 18");
    }, 0);
});
}
log('准备执行...');
test2();
=======
    );
}*/
function test(){
    /*var modules=Process.enumerateModules();
    for (var i = 0; i < modules.length; i++){
        console.log("模块:"+modules[i].name);
    }*/
    Java.perform(()=>{
        /*var cs=Java.enumerateLoadedClassesSync();
        for (var i = 0; i < cs.length; i++){
            if(cs[i].indexOf('com.tapsdk.antiaddiction.models.IdentifyModel')>=0){
                console.log("类名:"+cs[i]);
            }
        }*/
        var im=Java.use("com.tapsdk.antiaddiction.models.IdentifyModel");
        var tt=im.$init();
        var ps=im.class["getDeclaredMethods"]();
        for(var i=0;i<ps.length;i++){
            var mn=ps[i];
            ps[i].implementation=function(){
                console.log("Hook方法"+mn+":开始执行");
                return mn(arguments);
            }
            console.log("Hook方法"+mn+":成功");
        }
        /*(im["checkIdentify"]as Java.Method).implementation=function(card : string){
            console.log("card:"+card);
            return this["checkIdentify"](card);
        }
        var res=im["checkIdentify"]("123456789");
        console.log("res:"+res);*/
        /*(im["checkIdentify"]as Java.Method).implementation=function(){
            console.log("d:"+arguments);
        };*/
    });
    //var openPtr = Module.getBaseAddress('il2cpp');
    //console.log("地址:"+openPtr);
    //Interceptor.attach()
}
function testIl2(){
    /*Il2Cpp.perform(() => {
        // code here
        log("v-:"+Il2Cpp.unityVersion);
    });*/
}
log('准备执行...');
test();
//setImmediate(frida_Memory); 
>>>>>>> cf33404de981c0bc934dad46b2bb28a457745671
log('执行完毕...');