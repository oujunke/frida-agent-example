import { log } from "./logger";
//import "frida-il2cpp-bridge";
//frida -U 修仙家族模拟器 --no-pause -l _agent.js
//objection -d -g 修仙家族模拟器 explore
//adb shell dumpsys activity top | grep ACTIVITY 获取当前页面
//com.cccs.xxjz/com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity
//广告页面
//com.cccs.xxjz
///data/app/~~tY1G0Z1a6CFufpL3mJwo8Q==/com.cccs.xxjz-adVy4RSt2fxHwZOePDWgrQ==
//
function test(){
    Java.perform(()=>{
        var models=Process.findModuleByName("libil2cpp.so");
        if(models!=null){
            var funcPoint=models.base.add(0x0051a4fc);
            log('base:'+models.base);
            //il2cpp_field_get_parent	0000000000377168	
            log("point:"+Module.findExportByName("libil2cpp.so","il2cpp_field_get_parent"));
            Interceptor.attach(funcPoint,{
                onEnter:function(arge){
                    var log="调用"+Thread.backtrace(this.context, Backtracer.ACCURATE)
        .map(DebugSymbol.fromAddress).join('\n') + '\n';
                }
            });
        }
    });
}

log('准备执行...');
setTimeout(test,10000);
log('执行完毕...');