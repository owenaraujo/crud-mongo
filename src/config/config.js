import express from "express";

import path from 'path'
import { createRol, Createuser, CreateEmpresa } from "../libs/setup";

import cors from "cors";

import morgan from "morgan";
import ip from 'my-local-ip'
import chat from "../routes/chat";
import auth from "../routes/auth";

import mantenimiento from "../routes/mantenimiento";
import system from "../routes/system";
import pkg from "../../package.json";

import productos from "../routes/productos";
import proveedores from "../routes/proveedores";
import ventas from "../routes/ventas";
import "../controller/controller.auth";
const app = express();

createRol();
Createuser();
CreateEmpresa()


app.use(cors());

app.set("info", pkg);
app.set('ip', ip())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.set("port", process.env.PORT || 3000);



app.use(morgan("dev"));
app.get("/informacion", (req, res) => {
  res.json({
    autor: app.get("info").author,
    contact: app.get("info").contact,
    version: app.get("info").version,
    name: app.get("info").productName,
    description: app.get("info").description,
    ip: app.get('ip'),
    PORT: app.get('port'),
  });
});
app.use(express.static(path.join(__dirname, "../public")));
app.use("/ventas", ventas);

app.use("/mantenimiento", mantenimiento);
app.use("/auth", auth);
app.use("/chat", chat);
app.use("/system", system);
app.use("/productos", productos);
app.use("/proveedores", proveedores);
app.use(function(req, res, next) {
  res.redirect("/")
});


export default app;
