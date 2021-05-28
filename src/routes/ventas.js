import { Router } from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import * as ventasController from "../controller/controller.ventas";
const router = Router();
router.post("/", ventasController.addventas);
router.post("/token",verifyToken,(req, res)=>{
    return res.json(req.headers)
});
router.get("/get", ventasController.getventas);
router.get("/get/count", ventasController.getventasCount);
router.delete("/:id", ventasController.deleteventas);
router.put("/:id", ventasController.putventas);
router.get("/:id", ventasController.getventasById);
router.get("/searchFromDelete/:paramether", ventasController.getventasByParams);

export default router;