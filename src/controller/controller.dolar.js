import Dolar from "../models/Dolar";

export const addDolar = async (req, res) => {
  try {
    const { valor } = req.body;
    const data = { valor };
    const saveData = new Dolar(data);
      await saveData.save();
    res.json({ message: "guardado con exito", value: true });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const putDolar = async (req, res) => {
  try {
    const { valor, id } = req.body;
    const data = { valor };
     await Dolar.findByIdAndUpdate(id,data);
      
    res.json({ message: "editado con exito", value: null });
  } catch (error) {
    res.json({
      message: "no se pudo procesar",
      value: false,
    });
  }
};
export const getDolar = async (req, res) => {
  const data = await Dolar.findOne();
  res.json(data);
};
export const getDolarById = async (req, res) => {
  const { id } = req.params;
  const data = await Dolar.findById(id);
  res.json(data);
};
export const deleteDolar = async (req, res) => {
  try {
    const { id } = req.params;
   
    await Dolar.findByIdAndRemove(id);
    res.json({message : 'borrado con exito',
 value : false});
  } catch (error) {
    res.json({message : 'no se pudo procesar',
    value : false
   });
  }
};
