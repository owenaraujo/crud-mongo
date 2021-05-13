import Unidades from "../models/unidadMedidaProductos";

export const addUnidades = async (req, res) => {
  try {
    const { nombre, abreviacion } = req.body;
    const data = { nombre, abreviacion };
    const saveData = new Unidades(data);
      await saveData.save();
    res.json({ message: "guardado con exito", value: true });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const putUnidades = async (req, res) => {
  try {
    const { id ,nombre, abreviacion } = req.body;
    const data = { nombre, abreviacion};
     await Unidades.findByIdAndUpdate(id,data);
      
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const getUnidades = async (req, res) => {
  const data = await Unidades.find({ status: true });
  res.json(data);
};
export const getUnidadesById = async (req, res) => {
  const { id } = req.params;
  const data = await Unidades.findById(id);
  res.json(data);
};
export const deleteUnidades = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = { status: false };
    await Unidades.findByIdAndUpdate(id, datos);
    res.json({message : 'borrado con exito',
 value : false});
  } catch (error) {
    res.json({message : 'no se pudo procesar',
    value : false
   });
  }
};
