import { Router } from "express";
import * as chatController from "../controller/controller.chat";
const router = Router();
router.get("/", chatController.getMessage);

router.post("/", chatController.addMessage);
router.delete("/", chatController.deleteMessage);


export default router;