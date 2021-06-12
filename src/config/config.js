import express from "express";

import path from 'path'
import { createRol, Createuser, CreateEmpresa } from "../libs/setup";

import cors from "cors";

import morgan from "morgan";

import chat from "../routes/chat";
import auth from "../routes/auth";

import mantenimiento from "../routes/mantenimiento";
import system from "../routes/system";
import pkg from "../../package.json";

import productos from "../routes/productos";
// import electron from 'electron'
import proveedores from "../routes/proveedores";
import ventas from "../routes/ventas";
import "../controller/controller.auth";
const app = express();

createRol();
Createuser();
CreateEmpresa()


app.use(cors());

app.set("info", pkg);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.set("port", process.env.PORT || 3000);



app.use(morgan("dev"));
app.get("/informacion", (req, res) => {
  res.json({
    autor: app.get("info").author,
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
  res.send('no funciona')
});


// function createWindow () {
//   const win = new electron.BrowserWindow({
//     width: 800,
//     height: 600
//   })

//   win.loadFile('index.html')
// }
// electron.app.whenReady().then(() => {
//   createWindow()
// })
// electron.app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') electron.app.quit()
// })
// electron.app.whenReady().then(() => {
//   createWindow()

//   electron.app.on('activate', function () {
//     if (electron.BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })
export default app;
