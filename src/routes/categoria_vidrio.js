import { Router } from "express";
import {verifyToken} from '../middlewares/auth.jwt'

import * as vidriocontroller from "../controller/controller.vidrio";
const router = Router();
router.get("/get/", vidriocontroller.getvidrio);
router.get("/get/count", vidriocontroller.getvidriocount);


router.get("/get/:id", vidriocontroller.getvidriobyid);

router.get("/get/:dato/:parametro", vidriocontroller.getvidriobyparam);
router.post("/post/",verifyToken, vidriocontroller.addvidrio);


router.put("/put/:id/",verifyToken, vidriocontroller.putvidrio);

export default router;
