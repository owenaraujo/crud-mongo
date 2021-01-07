// import { verify } from "jsonwebtoken";
import config from "../config/db";

import jwt from "jsonwebtoken";
import  'express-session'
import  'express'
// import Usuarios from "../models/usuarios";
export const verifyToken = async (req, res, next) => {
  return next()
  try {
  let token = req.session.passport.user.token

    if (!token) return res.redirect("/");
    const decoder = jwt.verify(token, config.secret);
    
    if(req.session.passport.user._id === decoder.id)
    next();
  } catch (error) {
    console.log("no hay respuesta");
    res.redirect("/");
  }
};
// password
