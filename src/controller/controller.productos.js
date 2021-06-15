import Productos from "../models/productos";

export const addproductos = async (req, res) => {
  try {
    const {
      nombre,
      codigo,
      stock,
      descripcion,
      categoria,
      unidadMedida,
      precio,
      proveedor_id,
      cantidad,
    } = req.body;
const producto = await Productos.countDocuments({codigo: codigo})
if (producto > 0) {
  return    res.json({ message: "codigo de producto en uso", value: false });

}

    const NewProduct = {
      nombre,
      codigo,
      stock,
      descripcion,
      categoria,
      unidadMedida,
      precio,
      proveedor_id,
      cantidad,
    };

  const data = new Productos(NewProduct)
  await data.save()
    res.json({ message: "producto guardado con exito", value: true });
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductosCount = async (req, res) => {
  try {
    const productos = await Productos.find({status: true})
    res.json(productos.length);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductos = async (req, res) => {
  try {
    const productos = await Productos.find()
      .populate("proveedor_id")
      .populate("categoria").populate('unidadMedida')
    res.json(productos);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductosActivate = async (req, res) => {
  try {
    const productos = await Productos.find({status: true})
      .populate("proveedor_id")
      .populate("categoria").populate('unidadMedida')
    res.json(productos);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductosDisable = async (req, res) => {
  try {
    const productos = await Productos.find({status: false})
      .populate("proveedor_id")
      .populate("categoria").populate('unidadMedida')
    res.json(productos);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const putproductosActivate = async (req, res) => {
 try {
  const { id } = req.params;
  const data = await Productos.findById(id);
  if (data.cantidad === 0) {
  res.json({ message: "no se puede activar un producto con stock 0", value: null });
  return 
    
  }
  await Productos.findByIdAndUpdate(id, { status: true });
  res.json({ message: "activado con exito", value: true });
 } catch (error) {
  res.json({ message: "no se pudo procesar", value: false });
   
 }
};
export const deleteproductos = async (req, res) => {
 try {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, { status: false });
  res.json({ message: "desactivado con exito", value: null });
 } catch (error) {
  res.json({ message: "no se pudo procesar", value: false });
   
 }
};
export const putproductos = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      codigo,
      stock,
      descripcion,
      categoria,
      unidadMedida,
      precio,
      proveedor_id,
      cantidad,

    } = req.body;

    const NewProduct = {
      nombre,
      codigo,
      stock,
      descripcion,
      categoria,
      unidadMedida,
      precio,
      proveedor_id,
      cantidad,
    };
    await Productos.findByIdAndUpdate(id, NewProduct);
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
    
  }
};
export const getproductosById = async (req, res) => {
  try {
    const { id } = req.params;
    const data =await Productos.findById(id);
    res.json(data);
  } catch (error) {
    res.json({message : 'no se pudo procesar', value: false})
  }
};
export const getproductosByParams = async (req, res) => {
  try {
    const { paramether } = req.params;
    const producto = await Productos.find({
      nombre: { $regex: paramether },
      status: true,
    });

    res.json(producto);
  } catch (error) {}
};
const errors = () => {
  res.json({ message: "no se pudo procesar", value: false });
};
