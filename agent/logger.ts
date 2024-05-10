export {log,debug,info,warn,error}
function log(message: string,l:number): void {
    if(l>=level)
        console.log(message);
}
function debug(message: string): void {
    log("debug:"+message,0);
}
function info(message: string): void {
    log("info:"+message,1);
}
function warn(message: string): void {
    log("warn:"+message,2);
}
function error(message: string): void {
    log("error:"+message,3);
}
var level=0;
