import { Router } from "express";
import * as productosController from "../controller/controller.productos";
const router = Router();
router.post("/", productosController.addproductos);
router.get("/get", productosController.getproductos);
router.get("/get/count", productosController.getproductosCount);
router.delete("/", productosController.deleteproductos);
router.put("/", productosController.putproductos);
router.get("/:id", productosController.getproductosById);
router.get("/searchFromDelete/:paramether", productosController.getproductosByParams);

export default router;
