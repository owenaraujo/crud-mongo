import categoriaProductos from "../models/categoria.productos";

export const addCategoriaProduct = async (req, res) => {
  try {
    const { nombre } = req.body;
  const data = { nombre };
  const saveData = new categoriaProductos(data);
   await saveData.save();
  res.json({message : 'guardado con exito',
value : true});
  } catch (error) {
    res.json({message: 'no se pudo procesar',
  value: false})
  }
};
export const getCategoriaProduct = async (req, res) => {
  const data = await categoriaProductos.find();
  res.json(data);
};
export const getCategoriaProductActivate = async (req, res) => {
  const data = await categoriaProductos.find({status: true});
  res.json(data);
};
export const getCategoriaProductById = async (req, res) => {
  const { id } = req.params;
  const data = await categoriaProductos.findById(id);
  res.json(data);
};
export const activateCategoriaProduct = async (req, res) => {
  try {
    const { id } = req.params;
  const datos = {status: true}
 await categoriaProductos.findByIdAndUpdate(id,datos);
  res.json({message : 'activado con exito',
  value : true});
  } catch (error) {
    res.json
    ({
      message : 'no se pudo procesar',
      value: false

    })
  }
};
export const deleteCategoriaProduct = async (req, res) => {
  try {
    const { id } = req.params;
  const datos = {status: false}
 await categoriaProductos.findByIdAndUpdate(id,datos);
  res.json({message : 'desactivado con exito',
  value : null});
  } catch (error) {
    res.json
    ({
      message : 'no se pudo procesar',
      value: false

    })
  }
};
