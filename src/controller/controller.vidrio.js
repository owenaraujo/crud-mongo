import vidrio from "../models/vidrios_categorias";
export const addvidrio = async (req, res) => {
  try {
    const { color } = req.body;
    const length = await vidrio.find({ color: color })
    if (length.length > 0) {
      return res.json({
        message: 'ya registrado',
        value: false
      })
    }

    const datos = {
      color
    };
    const newvidrio = new vidrio(datos);
    

    await newvidrio.save();

    res.json({
      message: 'guardado con exito',
      value: true
    });
  } catch (e) {
   

    res.json({
      message: 'no se pudo procesar',
      value: false
    })
  }
};
export const getvidriobyparam = async (req, res) => {
  try {
    const { parametro, dato } = req.params


    var myObj =
      myObj[parametro] = {
        $regex: '.*' + dato + '.*',
        $options: 'i'


      }

    const vidrios = await vidrio.find(
      myObj).sort({ nombre: 1 })

    res.json(vidrios);
  } catch (error) {
    res.json({
      message: 'no hay conexion',
      value: false
    })
  }
};
export const getvidrio = async (req, res) => {
  try {
    const vidrios = await vidrio.find().sort({ color: 1 })
    res.json(vidrios);
  } catch (error) {
    res.json({
      message: 'no hay conexion',
      value: false
    })
  }
};

export const getvidriocount = async (req, res) => {
  try {
    const vidrios = await vidrio.find()
    res.json(vidrios.length);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};


export const putvidrio = async (req, res) => {
  try {
    const { id } = req.params
    const {
      color,
    } = req.body;
    const datos = { color };

    const NewDatos = await vidrio.findByIdAndUpdate(id, datos);
    const saved = NewDatos.save();
    res.json({
      message: 'editado con exito',
      value: null
    });
  } catch (e) {
    res.json
      ({
        message: 'no se pudo procesar',
        value: false

      })
  }
}
export const getvidriobyid = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await vidrio.findById(id);
    res.json(data);
  } catch (e) {
    res.json({
      message: 'no se pudo procesar',
      value: false
    });
  }
};
