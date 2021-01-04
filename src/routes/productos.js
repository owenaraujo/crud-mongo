import { Router } from "express";
import * as productosController from "../controller/controller.productos";
const router = Router();
router.get("/", productosController.getproductos);
router.get("/:id", productosController.getproductosById);
router.post("/", productosController.addproductos);
router.delete("/", productosController.deleteproductos);
router.put("/", productosController.putproductos);

export default router;
