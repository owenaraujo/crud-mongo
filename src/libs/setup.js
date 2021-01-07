import Roles from "../models/roles";
import Usuarios from "../models/usuarios";
export const createRol = async () => {
  try {
    const count = await Roles.estimatedDocumentCount();
  if (count > 0) return;
  const values = await Promise.all([
    new Roles({ name: "usuario" }).save(),
    new Roles({ name: "administrador" }).save(),
    new Roles({ name: "vendedor" }).save(),
    new Roles({ name: "moderador" }).save(),
    new Roles({ name: "supervisor" }).save(),
  ]);
  } catch (error) {
    console.log('sin procesar');
  }
  
};
export const Createuser = async () => {
  try {
    const count = await Usuarios.estimatedDocumentCount();
  if (count > 0) return;
  const name = { name: "administrador" };
  const [rol] = await Roles.find(name);

  const password = "1234";
  const values = await Promise.all([
    new Usuarios({
      nombre: "admin",
      cedula: "123456",
      roles: [rol._id],
      correo: "default@gmail.com",
      password: await Usuarios.encrypPassword("password"),
      pregunta: "admin",
      respuesta: "admin",
      username: "admin",
      token: "default",
      nacionalidad: "default",
    }).save(),
    
  ])
  } catch (error) {
    console.log('sin procesar');
  }

};
