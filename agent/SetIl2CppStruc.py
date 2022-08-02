
import idc

path="D:\\temp\\cccs\\cccs43.txt"
fs=open(path)
claName=''
data=[]
tdata=[]
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
        if args[0]=="class" or args[0]=="struct":
            claName=args[1]
            tdata=[]
            data.append([claName,tdata])
        elif claName!='':
            name=''
            if args[-1].find('0x')<0:
                continue
            if args[1].find('(')>=0 or args[2].find('(')>=0:
                continue
            elif args[0]=='static':
                continue
            ipd=int(args[-1],16)
            type=args[0]
            name=args[1][:-1]+'_'+type+'_'+args[-1]
            size=8
            if type=='System.Int32' or type=='System.UInt32':
                size=4
            elif type=="System.Boolean":
                size=1
            elif type=='System.Int16' or type=='System.UInt16':
                size=2
            tdata.append([ipd,name,size,ipd])
    else:
        break
for d in data:
    if d[0].find('<')>=0 or len(d[1])==0:
        continue
    elif d[0].find('GS.')<0:
        continue
    print(d)
    name=d[0].replace('<','_').replace('>','_').replace('.','_')
    sid=idc.get_struc_id(name)
    if sid!=idc.BADADDR:
        idc.del_struc(sid)
    sid=idc.add_struc(-1,name,0)
    lastNum=0
    sn=0
    for t in d[1]:
        if len(t)==0:
            continue
        if t[3]>lastNum:
            idc.add_struc_member(sid,"NOP_"+str(sn),-1,idc.FF_BYTE,-1,t[3]-lastNum)
            sn=sn+1
            lastNum=t[3]
        idc.add_struc_member(sid,t[1],-1,idc.FF_BYTE,-1,t[2])
        lastNum=lastNum+t[2]