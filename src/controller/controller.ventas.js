import Ventas from "../models/ventas";
import Productos from "../models/productos";

export const addventas = async (req, res, next) => {
  try {
    const valores = req.body
    
    valores.productos.forEach(async(element) => {
        const id = element.id_producto
        const data = await Productos.findById(id)
        const resta = data.cantidad - element.cantidad
       
      await Productos.findByIdAndUpdate(id,{cantidad: resta})
    });
 const data = new Ventas(valores)


  await data.save()
  res.json({value: true, message: ' venta hecha con exito'})

  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getventasCount = async (req, res) => {
  try {
    const ventas = await Ventas.estimatedDocumentCount()
    res.json(ventas);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getventas = async (req, res) => {
  try {
    const ventas = await Ventas.find()
      .populate("productos.id_producto")
    res.json(ventas);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const deleteventas = async (req, res) => {
 try {
  const { id } = req.params;
  await Ventas.findByIdAndUpdate(id, { status: false });
  res.json({ message: "borrado con exito", value: null });
 } catch (error) {
  res.json({ message: "no se pudo procesar", value: false });
   
 }
};
export const putventas = async (req, res) => {
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
    await Ventas.findByIdAndUpdate(id, NewProduct);
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
    
  }
};
export const getventasById = async (req, res) => {
  try {
    const { id } = req.params;
    const data =await Ventas.findById(id);
    res.json(data);
  } catch (error) {
    res.json({message : 'no se pudo procesar', value: false})
  }
};
export const getventasByParams = async (req, res) => {
  try {
    const { paramether } = req.params;
    const producto = await Ventas.find({
      nombre: { $regex: paramether },
      status: true,
    });

    res.json(producto);
  } catch (error) {}
};
const errors = () => {
  res.json({ message: "no se pudo procesar", value: false });
};
