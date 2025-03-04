import modelo from "../models/modelos_categorias.js";
import vidrios_categorias from "../models/vidrios_categorias.js";
export const addmodelo = async (req, res) => {
  try {
    const {marca, modelo,codename, sku, sku_2,caregoria } = req.body;
    
    const length = await modelo.find({ modelo: modelo })
    if (length.length > 0) {
      return res.json({
        message: 'ya registrado',
        value: false
      })
    }

    const datos = {
      marca, modelo, caregoria,codename,sku,sku_2,caregoria
    };
    return console.log(datos);
    
    const newmodelo = new modelo(datos);
    console.log(newmodelo);

    await newmodelo.save();

    res.json({
      message: 'guardado con exito',
      value: true
    });
  } catch (e) {
    console.log(e);

    res.json({
      message: 'no se pudo procesar',
      value: false
    })
  }
};
export const getmodelobyparam = async (req, res) => {
 
  
  
  try {
    const {  name } = req.query
    console.log(name);
    

    const datos = await modelo.find(
     { $or: [
        {
          marca: { $regex: name + `.*`, $options: "i" },
        },
        {
          modelo: {
            $regex: `.*` + name + `.*`,
            $options: "i",
          },
          
        },
        {
          codename: {
            $regex: `.*` + name + `.*`,
            $options: "i",
          },
          
        },
      ],}).populate("categoria").limit(20).sort({marca:1})
      
      

    

    res.json(datos);
  } catch (error) {
    console.log(error);
    
    res.json({
      message: 'no hay conexion',
      value: false
    })
  }
};
export const getmodelo = async (req, res) => {
  try {
    const modelos = await modelo.find().sort({ color: 1 })
    res.json(modelos);
  } catch (error) {
    res.json({
      message: 'no hay conexion',
      value: false
    })
  }
};

export const getmodelocount = async (req, res) => {
  try {
    const modelos = await modelo.find()
    res.json(modelos.length);
  } catch (error) {
    res.json({ message: "no se pudo procesar", value: false });
  }
};


export const putmodelo = async (req, res) => {
  try {
    let id = req.params.id
    
    const newmodel = req.body
    const val = await vidrios_categorias.findById(req.body.categoria)
    
    
   if (val._id == id) {

  if (newmodel.marca == "xiaomi") {
    const codename = await modelo.find({codename: newmodel.codename})
    
    if (codename.length>0)  return res.json({
      message: 'modelo existente',
      value: null
    })
    
    const datos = await new modelo(newmodel)
    await datos.save()
    
    
    res.json({
      message: 'guardado con exito',
      value: true
    })
    
    
  }
  else {
   
   if(newmodel.sku == null ) return res.json({message:"tienes que agregar sku con esta marca", value:null})
     
    const sku = await modelo.findOne({sku: newmodel.sku})
    if (sku) return res.json({
      message: 'modelo ya existente',
      value: null
    })
    await new modelo(newmodel).save()
    res.json({
      message: 'guardado con exito',
      value: true
    })

    
    
  }
    
   }
   

   
  } catch (e) {
   
    
    res.json
      ({
        message: 'no se pudo procesar',
        value: false

      })
  }
}
export const getmodelos= async (req, res)=>{
  try {
    const data = await modelo.find({categoria: req.params.id})
    res.json(data) 
  } catch (e) {
    res.json({
      message: 'no se pudo procesar',
      value: false
    });
    
  }
}
export const getmodelobyid = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await modelo.findById(id);
    res.json(data);
  } catch (e) {
    res.json({
      message: 'no se pudo procesar',
      value: false
    });
  }
};
