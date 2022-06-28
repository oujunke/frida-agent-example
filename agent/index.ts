import { log } from "./logger";
//frida -U 修仙家族模拟器 --no-pause -l _agent.js
//
//get_self_process_name()获取当前运行进程包名
//参考：https://github.com/lasting-yang/frida_dump/blob/master/dump_dex_class.js
function get_self_process_name()
{
	var openPtr = Module.getExportByName('libc.so', 'open');
	var open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);

	var readPtr = Module.getExportByName("libc.so", "read");
	var read = new NativeFunction(readPtr, "int", ["int", "pointer", "int"]);

	var closePtr = Module.getExportByName('libc.so', 'close');
	var close = new NativeFunction(closePtr, 'int', ['int']);

	var path = Memory.allocUtf8String("/proc/self/cmdline");
	var fd = open(path, 0);
	if (fd != -1)
	{
		var buffer = Memory.alloc(0x1000);

		var result = read(fd, buffer, 0x1000);
		close(fd);
		var result2 = buffer.readCString();
		return result2;
	}

	return "-1";
}

var pattern = "AF 1B B1 FA 18";//global-metadata.dat头部特征
//hook指定的内存标识
function frida_Memory()
{
    Java.perform(function ()
    {
        console.log("头部标识:" + pattern);
        var addrArray = Process.enumerateRanges("r--");
        for (var i = 0; i < addrArray.length; i++)
        {
            var addr = addrArray[i];
            Memory.scan(addr.base, addr.size, pattern,
                {
                    onMatch: function (address, size)
                    {
                        console.log('搜索到 ' + pattern + " 地址是:" + address.toString());
                        console.log(hexdump(address,
                            {
                                offset: 0,
                                length: 0x110,
                                header: true,
                                ansi: true
                            }
                        ));
                        //0x108，0x10C如果不行，换 0x100，0x104
                        var DefinitionsOffset =address.add(0x108);
                        var DefinitionsOffset_size = DefinitionsOffset.readInt();

                        var DefinitionsCount = address.add(0x10C);
                        var DefinitionsCount_size =DefinitionsCount.readInt(); 
                        if (DefinitionsCount_size < 10)
                        {
                            DefinitionsOffset =address.add(0x100);
                            DefinitionsOffset_size =DefinitionsOffset.readInt();

                            DefinitionsCount =address.add(0x104);
                            DefinitionsCount_size = DefinitionsCount.readInt();
                        }
                        //根据两个偏移得出global-metadata大小
                        var global_metadata_size = DefinitionsOffset_size + DefinitionsCount_size
                        console.log("大小：", global_metadata_size);
                        var file = new File("/data/data/" + get_self_process_name() + "/global-metadata.dat", "wb");
                        var data=address.readByteArray(global_metadata_size);
                        file.write(data as ArrayBuffer);
                        file.flush();
                        file.close();
                        console.log('路径：' + "/data/data/" + get_self_process_name() + "/global-metadata.dat");
                        console.log('导出完毕...');
                    },
                    onComplete: function ()
                    {
                        //console.log("搜索完毕")
                    }
                }
            );
        }
        console.log("搜索完毕");
    }
    );
}
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
        (im["checkIdentify"]as Java.Method).implementation=function(card:string){
            console.log("d:"+card);
        };
    });
    //var openPtr = Module.getBaseAddress('il2cpp');
    //console.log("地址:"+openPtr);
    //Interceptor.attach()
}
log('准备执行...');
test();
//setImmediate(frida_Memory); 
log('执行完毕...');