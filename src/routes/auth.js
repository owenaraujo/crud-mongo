import { Router } from "express";
import * as authController from "../controller/controller.auth";
const router = Router();


router.post('/signin', authController.sigin);
  router.get('/getUser' ,authController.getUser)

router.post("/signup", authController.signup);
router.get("/:name", authController.GetUserByUsername);
router.get("/", authController.GetUserByUsername);

export default router;
