import Usuarios from "../models/usuarios";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy } from "passport-local";
import config from '../config/db'
export const signup = async (req, res) => {
  const {
    nombre,
    cedula,
    roles,
    correo,
    password,
    pregunta,
    respuesta,
    username,
    nacionalidad,
  } = req.body;

  const datosUsuario = {
    nombre,
    cedula,
    roles,
    correo,
    password: await Usuarios.encrypPassword(password),
    pregunta,
    respuesta,
    username,
    nacionalidad,
  };

  const nuevoUsuario = new Usuarios(datosUsuario);
  const savedUser = await nuevoUsuario.save();
  const token = jwt.sign({ id: savedUser._id }, config.secret, {
    expiresIn: 36000, //10horas
  });
  res.json({ token });
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
        const users = usuarios[0];
        console.log(users._id);
        const token = jwt.sign({ id: users._id }, config.secret, { expiresIn: 36000 });
  
        const rows = await Usuarios.findOneAndUpdate(usuarios._id, {
          token: token,
        });
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
        res.json({message: 'error'})
      }
    }
  )
);

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

export const GetUserByNombre = async (req, res) => {
  const data = await Usuarios.find();
  res.json(data);
};
