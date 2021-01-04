import { Router } from "express";
import * as notasController from "../controller/controller.notas";
const router = Router();
router.get("/", notasController.getnotas);
router.get("/:id", notasController.getnotasById);
router.post("/", notasController.addnotas);
router.delete("/", notasController.deletenotas);
router.put("/", notasController.putnotas);

export default router;
