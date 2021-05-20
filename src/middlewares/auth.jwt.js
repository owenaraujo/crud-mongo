
import jwt from "jsonwebtoken";
//import Usuarios from "../models/usuarios";
export const verifyToken = async (req, res, next) => {
  try {
  let {token} = req.params
console.log(token);
    if (!token) return res.json('no se ha iniciado session')
    jwt.verify(token, 'secreto');
    next();
  } catch (error) {
    res.json({message: 'debe iniciar sesion de nuevo',
    value: false})
    
  }
};
// password
