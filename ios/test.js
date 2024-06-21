export function test(){
    var cls = ObjC.classes['WAPushController'];
    if(cls==null){
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
    console.log(`${cls}-$ivars:${cls.$ivars}`);//
    var ivar=cls.$ivars;
    console.log(`toJSON:${cls.toJSON()}-prototype:${cls.prototype}-constructor:${cls.constructor}-hasOwnProperty:${cls.hasOwnProperty}`);
    console.log(`toJSON:${cls.toJSON()}-`);
    console.log(`${cls}-$ivars.param1:${ivar.toJSON}-${ivar['ownKeys']}-${Object.keys(ivar)}`);//
    for (let index = 0; index < cls.$ivars.length; index++) {
        const element = cls[cls.$ivars[index]];
        // for(var key in element){
        //     console.log(`key:${key}--value:${element[key]}`);
        // }
        console.log(`name:${element.symbol}-${element}`);
    }
}