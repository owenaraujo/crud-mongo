import Empresa from "../models/empresa";

export const addEmpresa = async (req, res) => {
  try {
    const { nombre, telefono, rif } = req.body;
    const data = { nombre, telefono, rif };
    const saveData = new Empresa(data);
      await saveData.save();
    res.json({ message: "guardado con exito", value: true });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const putEmpresa = async (req, res) => {
  try {
    const {id}= re.params
    const {  nombre, telefono, rif } = req.body;
    const data = { nombre, telefono, rif };
     await Empresa.findByIdAndUpdate(id,data);
      
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const putDolar = async (req, res) => {
  try {
    const {id}= req.params
    const { dolar } = req.body;
    const data = { dolar };
     await Empresa.findByIdAndUpdate(id,data);
      
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const putDatos = async (req, res) => {
  try {
    const {id}= req.params
    const { nombre,rif,telefono } = req.body;
    const data = {  nombre,rif,telefono};
     await Empresa.findByIdAndUpdate(id,data);
      
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const getEmpresa = async (req, res) => {
  const data = await Empresa.findOne();
  res.json(data);
};
export const getEmpresaById = async (req, res) => {
  const { id } = req.params;
  const data = await Empresa.findById(id);
  res.json(data);
};
export const deleteEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = { status: false };
    await Empresa.findByIdAndUpdate(id, datos);
    res.json({message : 'borrado con exito',
 value : false});
  } catch (error) {
    res.json({message : 'no se pudo procesar',
    value : false
   });
  }
};
