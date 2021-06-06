import { Router } from "express";
import * as mantenimientoController from "../controller/controller.mantenimiento";
const router = Router();
router.get("/get", mantenimientoController.getMantenimiento);
router.get("/get/:id", mantenimientoController.getMantenimientoById);
router.post("/", mantenimientoController.addMantenimiento);
router.delete("/", mantenimientoController.deleteMantenimiento);
router.put("/", mantenimientoController.putMantenimiento);

export default router;
