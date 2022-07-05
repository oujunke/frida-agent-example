import { log } from "./logger";
//

function test(){
  Java.perform(()=>{
    var sy=Java.use("com.unity3d.player.UnityPlayer");
    sy["$init"] .overload('android.content.Context', 'com.unity3d.player.IUnityPlayerLifecycleEvents').implementation
    =function(a:any,b:any){
      log("init:"+a+"-"+b);
      var b= this.$init(a,b);
      var ba=Module.findExportByName("libil2cpp.so","JNI_OnLoad");
      var ad=ba?.sub(0x00374BAC).add(0x00482520);
      var tt=Module.findExportByName("libil2cpp.so","il2cpp_image_get_name");
      log("tt:"+tt+"-ttt:"+ba?.sub(0x00374BAC).add(0x37309C));
      log("ad:"+ad)
      Interceptor.attach(<NativePointerValue>ad,{
        onEnter:function(){
          log("onEnter:"+this+"-args"+arguments);
        },
        onLeave:function(par){
          log("onLeave:"+par);
        }
      });
      Interceptor.attach(<NativePointerValue>ba?.sub(0x374BAC).add(0x00483238),{
        onEnter:function(){
          log("onEnter:"+this+"-args"+arguments);
        },
        onLeave:function(par){
          log("onLeave:"+par);
        }
      });
      return b;
    };
  });
}
function test1(){
  Java.perform(()=>{
    var sy=Java.use("com.unity3d.player.UnityPlayer");
    sy["$init"] .overload('android.content.Context', 'com.unity3d.player.IUnityPlayerLifecycleEvents').implementation
    =function(a:any,b:any){
      log("init:"+a+"-"+b);
      var b= this.$init(a,b);
  var ba=Module.findExportByName("libil2cpp.so","JNI_OnLoad");
  var ad=ba?.sub(0x003790EC);
  function interc(par2:string,name:string){
    var po1=<NativePointerValue>ad?.add(par2);
    Interceptor.attach(po1,{
      onEnter:function(args){
        log(name+"-"+par2+"-"+po1+"-调用栈:"+Thread.backtrace(this.context, Backtracer.ACCURATE)
        .map(DebugSymbol.fromAddress).join('\n') + '\n');
        log(name+"-"+par2+"-onEnter:"+this+"-args:"+args);
        /*var str="";
        for(var i=0;i<args.length;i++){
          str=str+i+":"+args[i]+";";
        }
        log(name+"-"+par2+"-onEnter:"+this+"-args:"+str);*/
      },
      onLeave:function(par){
        log(name+"-"+par2+"-onLeave:"+par);
      }
    });
  }
  function rinterc(par2:string,name:string){
    var po1=<NativePointerValue>ad?.add(par2);
    var rpo1 = new NativeFunction(po1, 'pointer', ['pointer', 'int']);
    var int1=function(n1:NativePointer, n2:number):NativePointer {
      log(name+'-n1:' + n1+"-n2:"+n2);
      //n1.add(224).writeInt(11111);
      var fd = rpo1(n1, n2*10000000);
      log('Got fd: ' + fd);
      return fd;
    };
    Interceptor.replace(po1, new NativeCallback(int1
      ,'pointer', ['pointer', 'int']));
  }
  function rinterc2(par2:string,name:string){
    var po1=<NativePointerValue>ad?.add(par2);
    var rpo1 = new NativeFunction(po1, 'pointer', ['pointer', 'pointer']);
    var int1=function(n1:NativePointer, n2:NativePointer):NativePointer {
      log(name+'-n1:' + n1+"-n2:"+n2);
      //n1.add(224).writeInt(11111);
      var fd = rpo1(n1, n2.add(30000));
      log('Got fd: ' + fd);
      return fd;
    };
    Interceptor.replace(po1, new NativeCallback(int1
      ,'pointer', ['pointer', 'pointer']));
  }
  /*function cinterc(par2:string,name:string){
    var po1=<NativePointerValue>ad?.add(par2);
    //var rpo1 = new NativeFunction(po1, 'pointer', ['pointer', 'int']);
    var int1=function(n1:number, n2:number,n3:NativePointer):NativePointer {
      log(name+'-n1:' + n1+"-n2:"+n2);
      //n1.add(224).writeInt(11111);
      var fd = n3.compare(n1, n2*100000);
      log('Got fd: ' + fd);
      return fd;
    };
    Interceptor.replace(po1, new NativeCallback(int1
      ,'pointer', ['int', 'int','pointer']));
  }*/
  //rinterc("0x0051A4FC","ChangeMerits");//加功德
  rinterc("0x005643d0","AddMoney")//页面加灵石
  rinterc("0x006d1abc","AddSuperAccelerationLastTime");//加加速时间
  rinterc2("0x0055b90c","ChangeShopRefreshTimes");//加刷新次数
  
  /*interc("0x00c935a8","ChangeMoney");
  interc("0x005127d8","UpdateMoney");
  interc("0x00bf0ca8","set_money");
  interc("0x00b5a944","set_money");
  interc("0x00b6e898","set_money");
  interc("0x00b9b5c4","set_money");
  interc("0x00c0bed0","set_money");
  interc("0x00c8a46c","set_money");
  interc("0x0048597c","set_money");*/
  //读取功德
  /*interc("0x00bf0b34","get_merits");
  interc("0x00557a50","get_merits");
  interc("0x00536784","GetCurrentGameWorldCanAquireMerits");
  interc("0x004b3a18","GetTalentNeedMerits");
  interc("0x004b4be0","GetMerits");
  interc("0x00557a90","GetPreVersionMerits");
  interc("0x00557d90","ChangeMerits");*/
  /*interc("0x00557a5c","set_money");
  interc("0x00557a90","set_money");
  interc("0x00557bb8","set_money");
  interc("0x00557d90","set_money");
  interc("0x00557df0","set_money");
  interc("0x00557dfc","set_money");
  interc("0x00557d68","set_money");*/
  //播放次数
  /*interc("0x004ab4e8","PlayAdVideo");
  interc("0x0051A4FC","ChangeMerits")*/
  //interc("0x006D1A14","GS_GSWorld_AddRewardAdPlayedTimes_sub_6D1A14");
  //interc("0x004AB42C","GameApp_AddTodayShowAdVideoTimes_sub_4AB42C");
  return b;
};
});
}
log('准备执行...');
//var pat=new NativePointer(0xfb4b);
//pat.add(224).writeInt(0x111111);
test1();
log('执行完毕...');