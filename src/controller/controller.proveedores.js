import Proveedor from "../models/proveedor";
export const addproveedor = async (req, res) => {
  try {
    const { nombre, codigo,  telefono, rif } = req.body;
  const datos = {
    nombre,
    codigo,
    
    telefono,
    
    rif
  };
  const NewProveedor = new Proveedor(datos);
  const save = await NewProveedor.save();
  res.json({message : 'guardado con exito',
value : true});
  } catch (e) {
    res.json({message: 'no se pudo procesar',
  value: false})
  }
};
export const getproveedoByParam = async (req, res) => {
  try {
    const {parametro, dato}= req.params
  
 
    var myObj = { status:true}
    myObj[parametro] = {
      $regex: '.*' + dato + '.*',
      $options: 'i'


    } 
  
    const proveedores = await Proveedor.find(
      myObj).sort({nombre:1})
      
  res.json(proveedores);
  } catch (error) {
   res.json({message: 'no hay conexion',
  value: false})
  }
};
export const getproveedor = async (req, res) => {
  try {
    const proveedores = await Proveedor.find().sort({nombre:1})
  res.json(proveedores);
  } catch (error) {
   res.json({message: 'no hay conexion',
  value: false})
  }
};
export const getproveedorActivate = async (req, res) => {
  try {
    const proveedores = await Proveedor.find({status: true}).sort({nombre:1})
  res.json(proveedores);
  } catch (error) {
   res.json({message: 'no hay conexion',
  value: false})
  }
};
export const getproveedorCount = async (req, res) => {
  try {
    const data = await Proveedor.find({status: true})
  res.json(data.length);
  } catch (error) {
   res.json({message: 'no hay conexion',
  value: false})
  }
};
export const deleteproveedor = async (req, res) => {
 try {
   const { id } = req.params;
   await Proveedor.findByIdAndUpdate(id,{status: false});
   res.json({message : 'desactivado con exito',
 value : null});
 } catch (e) {
   res.json({message : 'no se pudo procesar',
 value : false
});
 }
};
export const ActivateProveedor = async (req, res) => {
 try {
   const { id } = req.params;
   await Proveedor.findByIdAndUpdate(id,{status: true});
   res.json({message : 'activado con exito',
 value : true});
 } catch (e) {
   res.json({message : 'no se pudo procesar',
 value : false
});
 }
};
export const putproveedor = async (req, res) => {
  try {
    const {id} = req.params
    const {
      nombre,
      codigo,
      telefono,
      rif,
    } = req.body;
    const datos = { nombre, codigo, telefono, rif };
    
    const NewDatos = await Proveedor.findByIdAndUpdate(id, datos);
    const saved = NewDatos.save();
    res.json({message : 'editado con exito',
  value : null});
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
