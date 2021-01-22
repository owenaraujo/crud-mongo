import categoriaProductos from "../models/categoria.productos";

export const addCategoriaProduct = async (req, res) => {
  const { nombre } = req.body;
  const data = { nombre };
  const saveData = new categoriaProductos(data);
  const datosguardados = await saveData.save();
  res.json({ ok: "ok" });
};
export const getCategoriaProduct = async (req, res) => {
  const data = await categoriaProductos.find({status: true});
  res.json(data);
};
export const getCategoriaProductById = async (req, res) => {
  const { id } = req.params;
  const data = await categoriaProductos.findById(id);
  res.json(data);
};
export const deleteCategoriaProduct = async (req, res) => {
  const { id } = req.params;
  const data = await categoriaProductos.findByIdAndUpdate(id,{status: false});
  res.json(data);
};
