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
    for(var key in cls.$ivars){
        console.log(`key:${key}--value:${cls.$ivars[key]}`);
    }
    console.log(`${cls}-$ivars.param1:${cls.$ivars.param1}`);//
    for (let index = 0; index < cls.$ivars.length; index++) {
        const element = cls[cls.$ivars[index]];
        // for(var key in element){
        //     console.log(`key:${key}--value:${element[key]}`);
        // }
        console.log(`name:${element.symbol}-${element}`);
    }
}