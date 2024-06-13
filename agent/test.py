import base64  
import idautils  
import idaapi  
import struct  
def bytes_to_spaced_hex(data: bytes) -> str:  
    return ' '.join(format(byte, '02x') for byte in data)
def print_data(data,len=0x40,t='b'):
    if type(data)==int:
        if data>0x10000:
            if t=='b':
                bytes_data =idaapi.dbg_read_memory(data,len)
                print('Hex:'+bytes_to_spaced_hex(bytes_data))
                print('Base64:'+base64.b64encode(bytes_data).decode('utf-8'))
            elif t=='i':
                bytes_data =idaapi.dbg_read_memory(data,4)
                # 将字节数据转换为整数  
                int_value = int.from_bytes(bytes_data, byteorder='little', signed=True)
                print('Int 16:'+hex(int_value))
        print(hex(data))
    else:
        print(type(data))
#print(idaapi.get_reg_name(45,8))
#print(hex(idaapi.get_reg_val("X1")))
x1=idaapi.get_reg_val("X0")
#print(hex(x1))
print_data(x1+0x18,4,'i')
#x0=0xb400007151b66f00
#print_data(x0,0x70+0x18)
#print_data(x0+0x18,0x70)
#print_data(x1,0x20)
#print_data(x1+0x28,0x2c)
#bytes_data = struct.pack('>I',idaapi.dbg_read_memory(x1,0x100))
#bytes_data =idaapi.dbg_read_memory(x1,0x8)
#print(bytes_data)
#print('Hex:'+bytes_to_spaced_hex(bytes_data))
#print('Str:'+bytes_data.decode('utf-8'))
#print('Base64:'+base64.b64encode(bytes_data).decode('utf-8'))
#print(bytes_data.hex())
#print(hex(idaapi.get_reg_val("Q6")))
#print(idaapi.get_reg_val("V1").hex())
