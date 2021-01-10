import { Router } from "express";
const router = Router();
import { verifyToken } from "../middlewares/midleware";
router.get("/", (req, res) => {
  res.render("signin");
});
router.get("/mantenimiento",verifyToken, (req, res) => {
  res.render("mantenimiento");
});

router.get("/productos/", verifyToken, (req, res) => {
  res.render("productos");
});
router.get("/configuracion",verifyToken, (req, res) => {
  res.render("configuracion");
});
router.get("/herramientas",verifyToken, (req, res) => {
  res.render("herramientas");
});
router.get("/maquinas",verifyToken, (req, res) => {
  res.render("maquinas");
});

router.get("/proveedores/",verifyToken, (req, res) => {
  res.render("proveedores");
});
router.get("/test/",verifyToken, (req, res) => {
  res.render("partials/chat");
});
router.get("/data", verifyToken,(req, res) => {
  res.render("edit");
});
router.get("/social", verifyToken,(req, res) => {
  res.render("social");
});
export default router;
