import Roles from "../models/roles";
import Usuarios from "../models/usuarios";
import Empresa from "../models/empresa";
export const createRol = async () => {
  try {
    const count = await Roles.estimatedDocumentCount();
  if (count > 0) return;
  const values = await Promise.all([
    new Roles({ name: "usuario" }).save(),
    new Roles({ name: "administrador" }).save(),
    new Roles({ name: "vendedor" }).save(),
  ]);
  } catch (error) {
    console.log('sin procesar');
  }
  
};
export const Createuser = async () => {
  try {
    const count = await Usuarios.estimatedDocumentCount();
  if (count > 0) return;
  const nameA = { name: "administrador" };
  const nameB = { name: "vendedor" };
  const nameC = { name: "usuario" };
  const [rolA] = await Roles.find(nameA);
  const [rolB] = await Roles.find(nameB);
  const [rolC] = await Roles.find(nameC);


  
  const values = await Promise.all([
    new Usuarios({
      nombre: "admin",
      documento: "123456",
      roles: [rolA._id],
      correo: "default@gmail.com",
      password: await Usuarios.encrypPassword("1234"),
     
      username: "admin",
     
    }).save(),
    new Usuarios({
      nombre: "vendedor",
      documento: "123456",
      roles: [rolB._id],
      correo: "default@gmail.com",
      password: await Usuarios.encrypPassword("1234"),
      
      username: "vendedor",
      
    }).save(),
    new Usuarios({
      nombre: "usuario",
      documento: "123456",
      roles: [rolC._id],
      correo: "default@gmail.com",
      password: await Usuarios.encrypPassword("1234"),
      
      username: "usuario",
     
    }).save(),
    
  ])

  } catch (error) {
    console.log('sin procesar');
  }

};
export const CreateEmpresa = async () => {
  try {
    const count = await Empresa.estimatedDocumentCount();
  if (count > 0) return;

  
  const values = await Promise.all([
    new Empresa({
      nombre: "serious programming",
      rif: "v-28072151-1",
      telefono: "+584147361209",
      dolar: 123456,
      
    }).save(),
    
    
  ])

  } catch (error) {
    console.log('sin procesar');
  }

};
