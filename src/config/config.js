import express from "express";
import sessions from "express-session";

import { createRol, Createuser, CreateEmpresa } from "../libs/setup";
import passport from "passport";

import cors from "cors";

import morgan from "morgan";

import chat from "../routes/chat";
import auth from "../routes/auth";

import mantenimiento from "../routes/mantenimiento";
import system from "../routes/system";
import pkg from "../../package.json";

import productos from "../routes/productos";
import proveedores from "../routes/proveedores";
import "../controller/controller.auth";
const app = express();

createRol();
Createuser();
CreateEmpresa()


app.use(cors());

app.set("info", pkg);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  sessions({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    // store: new session ({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  app.locals.usuario = req.user || null;

  next();
});


app.set("port", process.env.PORT || 3000);



app.use(morgan("dev"));
app.get("/informacion", (req, res) => {
  res.json({
    autor: app.get("info").author,
  });
});


app.use("/mantenimiento", mantenimiento);
app.use("/auth", auth);
app.use("/chat", chat);
app.use("/system", system);
app.use("/productos", productos);
app.use("/proveedores", proveedores);
app.use(function(req, res, next) {
  res.status(404).send('ruta no encontrada');
});
export default app;
