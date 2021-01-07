import Proveedor from "../models/proveedor";
export const addproveedor = async (req, res) => {
  try {
    const { nombre, codigo, descripcion, correo, telefono, direccion } = req.body;
  const datos = {
    nombre,
    codigo,
    descripcion,
    correo,
    telefono,
    direccion,
  };
  const NewProveedor = new Proveedor(datos);
  const save = await NewProveedor.save();
  res.json({message : 'guardado con exito',
value : true});
  } catch (error) {
    res.json({message: 'no se pudo procesar',
  value: false})
  }
};
export const getproveedor = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
  res.json(proveedores);
  } catch (error) {
   res.json({message: 'no hay conexion',
  value: false})
  }
};
export const deleteproveedor = async (req, res) => {
 try {
   const { id } = req.params;
   const data = await Proveedor.findByIdAndDelete(id);
   res.json({message : 'borrado con exito',
 value : true});
 } catch (e) {
   res.json({message : 'no se pudo procesar',
 value : false
});
 }
};
export const putproveedor = async (req, res) => {
  try {
    const {
      nombre,
      codigo,
      descripcion,
      correo,
      telefono,
      direccion,
    } = req.params;
    const datos = { nombre, codigo, descripcion, correo, telefono, direccion };
    const NewDatos = await Proveedor.findByIdAndUpdate(id, datos);
    const saved = NewDatos.save();
    res.json({message : 'guardado con exito',
  value : true});
  } catch (e){
    res.json
    ({
      message : 'no se pudo procesar',
      value: false

    })
  }
}
export const getproveedorById = async (req, res) => {
try {
  const { id } = req.params;
  const data = await Proveedor.findById(id);
  res.json(data);
} catch (e) {
  res.json({message : 'no se pudo procesar',
value : false});}
};
