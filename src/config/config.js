import express from "express";
import sessions from "express-session";
import extend from "express-ejs-extend";
import { createRol, Createuser } from "../libs/setup";
import passport from "passport";

import cors from "cors";
import path from "path";
import morgan from "morgan";
import main from "../routes/main";
import chat from "../routes/chat";
import auth from "../routes/auth";
import cookies from "cookie-parser";
import mantenimiento from "../routes/mantenimiento";
import system from "../routes/system";
import pkg from "../../package.json";
import notas from "../routes/notas";
import productos from "../routes/productos";
import proveedores from "../routes/proveedores";
import "../controller/controller.auth";
const app = express();

createRol();
Createuser();


app.use(cors());
app.use(cookies());
app.set("info", pkg);
app.use(express.static(path.join(__dirname, "../public")));
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

app.engine("ejs", extend);
app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(morgan("dev"));
app.get("/informacion", (req, res) => {
  res.json({
    autor: app.get("info").author,
  });
});
app.use("/", main);

app.use("/mantenimiento", mantenimiento);
app.use("/auth", auth);
app.use("/chat", chat);
app.use("/system", system);
app.use("/notas", notas);
app.use("/productos", productos);
app.use("/proveedores", proveedores);
app.use(function(req, res, next) {
  res.status(404).send('ruta no encontrada');
});
export default app;
