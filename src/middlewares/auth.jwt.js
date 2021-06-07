
import jwt from "jsonwebtoken";
import config from "../config/db";

export const verifyToken = async (req, res, next) => {
  try {
    
  let {xtoken} = req.headers
  
    if (xtoken == 1234) return  res.json({message: 'no se ha iniciado sesion',
    value: null})
    jwt.verify(xtoken, config.secret);
    next();
  } catch (error) {
    res.json({message: 'debe iniciar sesion de nuevo',
    value: false})
    
  }
};
// password
