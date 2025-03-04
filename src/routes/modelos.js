import { Router } from "express";
import {verifyToken} from '../middlewares/auth.jwt'

import * as modelocontroller from "../controller/controller.modelo";
const router = Router();
router.get("/get/", modelocontroller.getmodelo);
router.get("/get/count", modelocontroller.getmodelocount);


router.get("/get/:id", modelocontroller.getmodelobyid);

router.get("/search", modelocontroller.getmodelobyparam);
router.post("/post/",verifyToken, modelocontroller.addmodelo);


router.put("/:id/",verifyToken, modelocontroller.putmodelo);
router.get("/:id/",verifyToken, modelocontroller.getmodelos);

export default router;
