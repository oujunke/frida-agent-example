
import jfx_bridge_ida


b = jfx_bridge_ida.IDABridge()

idaapi = b.get_idaapi()
idc = b.get_idc()
idautils = b.get_idautils()

print(idc.ScreenEA())

# or use the sark module for easier scripting! Remember to install sark in the IDA python environment
sark = b.get_sark()
print(sark.Line())