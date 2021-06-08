import { Router } from "express";
import {verifyToken} from '../middlewares/auth.jwt'

import * as productosController from "../controller/controller.productos";
const router = Router();
router.post("/",verifyToken, productosController.addproductos);
router.get("/get", productosController.getproductos);
router.get("/get/activate", productosController.getproductosActivate);
router.get("/getDisable", productosController.getproductosDisable);
router.get("/get/count", productosController.getproductosCount);
router.delete("/:id",verifyToken, productosController.deleteproductos);
router.put("/:id",verifyToken, productosController.putproductos);
router.delete("/activate/:id",verifyToken, productosController.putproductosActivate);
router.get("/:id", productosController.getproductosById);
router.get("/searchFromDelete/:paramether", productosController.getproductosByParams);

export default router;
