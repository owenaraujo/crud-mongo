import Usuarios from "../models/usuarios";
import Roles from "../models/roles";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy } from "passport-local";
import config from '../config/db'
import { json } from "express";
export const signup = async (req, res) => {
  try {
    const {
    
      password,
      pregunta,
      respuesta,
      username,
      
    } = req.body;
  
  const [rol] = await Roles.find({name : 'usuario'})
  const roles =rol._id 
  
  
  
    const datosUsuario = {
      
      
      roles,
      password: await Usuarios.encrypPassword(password),
      pregunta,
      respuesta,
      username,
      
    };
    
  
    const nuevoUsuario = new Usuarios(datosUsuario).save();
    
    
    res.json({value : true,
    message: 'nuevo usuario creado'})
  } catch (error) {
    res.json({value : false,
      message: 'no se pudo procesar'})
  }
};

passport.use(
  "local.signin",new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {

      try {
        const usuarios = await Usuarios.find({ username: username }).populate(
          "roles"
        );
       
        // return console.log(usuarios[0]);
          if (usuarios[0] === undefined) return  console.log('usuario no encontrado')

        const users = usuarios[0];
        
        const token = jwt.sign({ id: users._id }, config.secret, { expiresIn: 36000 });
  
        const rows = await Usuarios.findByIdAndUpdate(users._id, {
          token: token,
        }).populate('roles')
        // console.log(rows);
        // return
        if (rows) {
          const user = rows;
          const validPassword = await Usuarios.comparePassword(
            password,
            user.password
          );
          if (validPassword) {
            done(null, user);
          } else {
            done(null, false);
          }
        } else {
          return done(null, false);
        }
      } catch (error) {
        // res.json({message: 'error'})
        console.log(error);
      }
    }
  )
);

export const getUser = async(req, res)=>{
const data = await Usuarios.find().populate('roles')
console.log(data)
}
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(async (user, done) => {
  const row = await Usuarios.findById(user._id, {
    password: 0,
    pregunta: 0,
    respuesta: 0,
  }).populate("roles");
  done(null, row);
});

export const GetUserByUsername = async (req, res) => {
  const {name}= req.params
  const data = await Usuarios.find({username: name});


  
  if (data) {
res.json(data)
    
  }
  else{
    res.json({value: true,
    message: 'nombre de usuario disponible'})
  }
};



