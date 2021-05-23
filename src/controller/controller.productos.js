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

    new Productos(NewProduct).save();
    res.json({ message: "producto guardado con exito", value: true });
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductosCount = async (req, res) => {
  try {
    const productos = await Productos.estimatedDocumentCount()
    res.json(productos);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const getproductos = async (req, res) => {
  try {
    const productos = await Productos.find()
      .populate("proveedor_id")
      .populate("categoria");
    res.json(productos);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};
export const deleteproductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, { status: false });
  res.json({ message: "borrado con exito", value: false });
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
    errors();
  }
};
export const getproductosById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = Productos.findById(id);
    res.json(producto);
  } catch (error) {}
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
