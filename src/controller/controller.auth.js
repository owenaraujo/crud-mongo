import Usuarios from "../models/usuarios";
import Roles from "../models/roles";
import jwt from "jsonwebtoken";


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


    export const sigin = async (req, res) => {
const {username, password} = req.body
      try {
        const usuarios = await Usuarios.find({ username: username }).populate(
          "roles"
        );
       
        // return console.log(usuarios[0]);
          if (usuarios[0] === undefined) return   res.json({token: token, message: 'usuario no encontrado',
          value: null})

        const users = usuarios[0];
           
        const token = jwt.sign({ id: users._id }, 'secreto', { expiresIn: 36000 });
  
      
        if (users) {
         
          const validPassword = await Usuarios.comparePassword(
            password,
            users.password
          );
          if (validPassword) {
            res.json({token: token,id:users._id, message: 'inicio de sesion exitoso',
            value: true})
          } else {
            res.json({message: 'clave incorrecta',
            value: false})
            
          }
        } else {
          res.json({message: 'usuario no encontrado',
          value: null})
          
        }
      } catch (error) {
        console.log(error);
        res.json({message: 'no hay conexion',
        value: false})
        
      }
    }
  
export const getRoles = async(req, res)=>{
const data= await Roles.find()
res.json(data)
} 
export const getUser = async(req, res)=>{
  const {id}= req.params
const data = await Usuarios.findById(id).populate('roles')
res.json(data)
}
export const getUsers = async(req, res)=>{
  
const data = await Usuarios.find().populate('roles')
res.json(data)
}


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



