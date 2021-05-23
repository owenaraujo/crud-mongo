
import jwt from "jsonwebtoken";
//import Usuarios from "../models/usuarios";
export const verifyToken = async (req, res, next) => {
  try {
  let {token} = req.params
console.log(token);
    if (token == 1234) return  res.json({message: 'no se ha iniciado sesion',
    value: null})
    jwt.verify(token, 'secreto');
    next();
  } catch (error) {
    res.json({message: 'debe iniciar sesion de nuevo',
    value: false})
    
  }
};
// password
