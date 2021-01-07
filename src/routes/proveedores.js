import { Router } from "express";
import * as proveedorController from "../controller/controller.proveedores";
const router = Router();
router.get("/get/", proveedorController.getproveedor);
router.get("/get/:id", proveedorController.getproveedorById);
router.post("/post/", proveedorController.addproveedor);
router.delete("/delete/:id", proveedorController.deleteproveedor);
router.put("/put/", proveedorController.putproveedor);

export default router;
