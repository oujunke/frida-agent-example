/**
 * Base64编解码工具
 * (原数据可以是字符字节数组也可以是任何格式的文件转换的字节数组)
 * 字节数组与base64字符串互转
 */
export class Base64{
    /**
     * base64的码表
     */
    private static readonly base64Codes:string= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    
    /**
     * 将字节数组转为base64字符串
     * @param bytes　原数据
     * @returns　base64字符串
     */
    static encode(bytes:number[]):string{
      let result=''
      for (let num of bytes){
        let numStr:string=num.toString(2)//数转成2进制串
        result+=Base64.preFill(numStr)//将每个二进制串从头部补齐到8位
      }
      //将二进制从尾部补到6的整数倍
      let len=result.length
      let endFillLen=(len%6!=0)?(6-len%6):0
      result=Base64.endFill(result,len+endFillLen)
      let newBytes:number[]=[]
      for (let i = 0; i < result.length; i=i+6) {
        const s =result.slice(i,i+6)//分割出二进制字符串形如01000110
        let n=parseInt(s,2)//将s作为二进制串转成数字
        newBytes.push(n)
      }
      result=''
      for (let byte of newBytes){
        //从base64编表中取对应字符
        let str=Base64.base64Codes.slice(byte,byte+1)
        result+=str
      }
      let len1=result.length
      let endFillLen1:number=(len1%4==0)?0:(4-len1%4)
      result=Base64.endFill(result,len1+endFillLen1,'=',4)//如果长度不是4的倍数用"="补足
      return result
    }
    static decode(base64Str:string):number[]{
      let reg:string="^([A-Za-z0-9+/]{4})+$" +
      "|^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=)$" +
      "|^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}={2})$" +
      "|^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{1}={3})$";
      if(!base64Str.match(reg))return []//验证base64Str是否非法
      //如果末尾有"="全部去掉
      base64Str=base64Str.replace('=','')
      //将每个字符转成number,即byte
      let bit6Str:string=''//每组6位的二进制字符串
      for (let i = 0; i < base64Str.length; i++) {
        const c= base64Str[i];
        const byte = Base64.base64Codes.indexOf(c)
        bit6Str+=Base64.preFill(byte.toString(2),6)
      }
      //转成每组8位的二进制字符串
      let bit6StrLen:number=bit6Str.length
      let deleteLen:number=bit6StrLen%8
      let bit8Str=bit6Str.slice(0,bit6StrLen-deleteLen)
      //将bit8Str按每8位一组放入数组
      let bytes:number[]=[]
      for (let i = 0; i < bit8Str.length; i=i+8) {
        //将每8位bit8Str作为二进制字符串转成数
        let num:number=parseInt(bit8Str.slice(i,i+8),2)
        bytes.push(num)
      }
      return bytes
    }
    /**
     * 不足8位时的前补0函数
     * @param str 原字符串长度
     * @param toLength　将要达到的总长
     * @param fillChar 用以填充的字符
     * @param groupLength 每组的标准长度(比如二进制8位)
     * @returns 补齐到toLength长度后的字符串
     */
    private static preFill(str:string,toLength:number=8,fillChar:string='0',groupLength:number=8):string{
      if(str.length%groupLength==0)return str
      let len=str.length
      //需要补的位数
      let preFillLen=toLength-len
      for (let i = 0; i < preFillLen; i++) {
        str=fillChar+str
      }
      return str
    }
    /**
     * 不足6位时的后补0函数
     * @param str　原字符串长度
     * @param toLength 将要达到的总长
     * @param fillChar 用以填充的字符
     * @param groupLength 每组的标准长度(比如base64每组截取6个二进制位)
     * @returns  补齐到toLength长度后的字符串
     */
    private static endFill(str:string,toLength:number=6,fillChar:string='0',groupLength:number=6):string{
      //console.log(str.length +':'+ groupLength+);
      if(str.length%groupLength==0)return str//如果已齐就不再补
      let len=str.length
      //需要补的位数
      let endFillLen=toLength-len
      for (let i = 0; i < endFillLen; i++) {
        str=str+fillChar
      }
      return str
    }
}