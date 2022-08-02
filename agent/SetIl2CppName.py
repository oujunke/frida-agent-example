import idautils
import idaapi
import idc



path="D:\\temp\\cccs\\cccs43.txt"
fs=open(path)
claName=''
while True:
    line=fs.readline()
    if line:
        line=line.strip()
        if not line:
            continue
        if line[0]=='}':
            claName=''
            continue
        elif line[0]=='{':
            continue
        args=line.split(' ')
        if args[0]=="class":
            claName=args[1].replace('<','_').replace('>','_')
        elif claName!='':
            name=''
            if args[-1].find('0x')<0:
                continue
            if args[1].find('(')>=0:
                name=args[1].split('(')[0]
            elif args[2].find('(')>=0:
                name=args[2].split('(')[0]
            else:
                continue
            ipd=int(args[-1],16)
            funName=idc.get_func_name(ipd)
            #GS.GSForce_BuyMeritItem_sub_55B6E0
            idc.set_name(ipd,'%s_%s_%s'%(claName,name.replace('<','_').replace('>','_'),funName))
    else:
        break


