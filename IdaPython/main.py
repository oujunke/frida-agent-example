
import jfx_bridge_ida


b = jfx_bridge_ida.IDABridge()

idaapi = b.get_idaapi()
idc = b.get_idc()
idautils = b.get_idautils()
ea=0x1028BADE0
print(idc.here())
print(idc.SegName(ea))
