import Usuarios from "../models/usuarios";
import Roles from "../models/roles";
import jwt from "jsonwebtoken";
import usuarios from "../models/usuarios";

export const signup = async (req, res) => {
  try {
    const { password,nombre , documento,roles, correo, username } = req.body;
    const data = await usuarios.countDocuments({username: username})
if (data > 0) {
  res.json({ value: false, message: "usuario de acceso en uso" });
return
}
    const datosUsuario = {
      roles,
      password: await Usuarios.encrypPassword(password),
      nombre,
      documento,
      correo,
      username,
    };

     new Usuarios(datosUsuario).save();

    res.json({ value: true, message: "nuevo usuario creado" });
  } catch (error) {
    console.log(error);
    res.json({ value: false, message: "no se pudo procesar" });
  }
};

export const sigin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const usuarios = await Usuarios.find({ username: username }).populate(
      "roles"
    );
    
    if (usuarios[0] === undefined)
      return res.json({
        message: "usuario no encontrado",
        value: null,
      });
      if (usuarios[0].status == false) {
        return res.json({
          message: "usuario con acceso bloqueado",
          value: false,
        });
      }
    const users = usuarios[0];

    const token = jwt.sign({ id: users._id }, "secreto", { expiresIn: 36000 });

    if (users) {
      const validPassword = await Usuarios.comparePassword(
        password,
        users.password
      );
      if (validPassword) {
        res.json({
          token: token,
          id: users._id,
          message: "inicio de sesion exitoso",
          value: true,
        });
      } else {
        res.json({ message: "clave incorrecta", value: false });
      }
    } else {
      res.json({ message: "usuario no encontrado", value: null });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "no hay conexion", value: false });
  }
};

export const getRoles = async (req, res) => {
  const data = await Roles.find();
  console.log(data);
  res.json(data);
};
export const activateUser = async (req, res) => {
 try {
  const { id, rol } = req.params;
  const roles = await Roles.findById(rol)
if (roles.name === 'administrador') {
  res.json({value: null, message:'no se puede eliminar usuario administrador'})
  return

}

   await Usuarios.findByIdAndUpdate(id, {status:true})
res.json({value: true, message: 'usuario activado con exito'})
  

 } catch (error) {
  res.json({value: false, message: 'no se pudo procesar la eliminacion'})
   
 }
}
export const deleteUser = async (req, res) => {
 try {
  const { id, rol } = req.params;
  const roles = await Roles.findById(rol)
if (roles.name === 'administrador') {
  res.json({value: null, message:'no se puede desactivar usuario administrador'})
  return

}

   await Usuarios.findByIdAndUpdate(id, {status:false})
res.json({value: false, message: 'usuario desactivado con exito'})
  

 } catch (error) {
  res.json({value: false, message: 'no se pudo procesar la eliminacion'})
   
 }
}
export const getUser = async (req, res) => {
  const { id } = req.params;
  const data = await Usuarios.findById(id).populate("roles");
  res.json(data);
};
export const getUsers = async (req, res) => {
  const data = await Usuarios.find().populate("roles");
  res.json(data);
};

export const GetUserByUsername = async (req, res) => {
  const { name } = req.params;
  const data = await Usuarios.find({ username: name });

  if (data) {
    res.json(data);
  } else {
    res.json({ value: true, message: "nombre de usuario disponible" });
  }
};
