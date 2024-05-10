function dumpModule(name :string,packName :string): void {
    let module=Process.findModuleByName(name);
    if(module==null){
        console.log("Module:"+name+"未找到");
        return;
    }
    var file_path = "/data/data/"+packName+"/" + module.name + "_" + module.base + "_" + ptr(module.size) + ".so";
    var file_handle = new File(file_path, "wb");
    if (file_handle && file_handle != null) {
        Memory.protect(module.base, module.size, 'rwx');
        var libso_buffer = module.base.readByteArray(module.size);
        if(libso_buffer!=null)
        {
            file_handle.write(libso_buffer);
        }
        file_handle.flush();
        file_handle.close();
        console.log("[dump]:", file_path);
    }
}
function printModuleName(): void {
    let modules=Process.enumerateModules();
    for (let index = 0; index < modules.length; index++) {
        const element = modules[index];
        console.log(element.name);
    }
}
export {printModuleName,dumpModule}