import { Router } from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import * as ventasController from "../controller/controller.ventas";
const router = Router();
router.post("/",verifyToken, ventasController.addventas);

router.get("/get/:inicio/:final", ventasController.getventas);
router.get("/get/count", ventasController.getventasCount);
router.delete("/:id",verifyToken, ventasController.deleteventas);
router.put("/:id", verifyToken, ventasController.putventas);
router.get("/:id", ventasController.getventasById);
router.get("/searchFromDelete/:paramether", ventasController.getventasByParams);

export default router;
