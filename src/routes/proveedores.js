import { Router } from "express";
import * as proveedorController from "../controller/controller.proveedores";
const router = Router();
router.get("/", proveedorController.getproveedor);
router.get("/:id", proveedorController.getproveedorById);
router.post("/", proveedorController.addproveedor);
router.delete("/", proveedorController.deleteproveedor);
router.put("/", proveedorController.putproveedor);

export default router;
