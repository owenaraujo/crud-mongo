import { Router } from "express";
import * as token from '../middlewares/auth.jwt'

import * as proveedorController from "../controller/controller.proveedores";
const router = Router();
router.get("/get/", proveedorController.getproveedor);
router.get("/get/count", proveedorController.getproveedorCount);
router.get("/get/:id", proveedorController.getproveedorById);
router.get("/get/:dato/:parametro", proveedorController.getproveedoByParam);
router.post("/post/:token",token.verifyToken, proveedorController.addproveedor);
router.delete("/delete/:id/:token", proveedorController.deleteproveedor);
router.put("/put/:id/:token", proveedorController.putproveedor);

export default router;
