import { Router } from "express";
import {verifyToken} from '../middlewares/auth.jwt'

import * as proveedorController from "../controller/controller.proveedores";
const router = Router();
router.get("/get/", proveedorController.getproveedor);
router.get("/get/count", proveedorController.getproveedorCount);
router.get("/get/:id", proveedorController.getproveedorById);
router.get("/get/:dato/:parametro", proveedorController.getproveedoByParam);
router.post("/post/",verifyToken, proveedorController.addproveedor);
router.delete("/delete/:id/",verifyToken, proveedorController.deleteproveedor);
router.put("/put/:id/",verifyToken, proveedorController.putproveedor);

export default router;
