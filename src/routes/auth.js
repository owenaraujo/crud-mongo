import { Router } from "express";
import * as authController from "../controller/controller.auth";
const router = Router();
import{verifyToken} from '../middlewares/auth.jwt'

router.post('/signin', authController.sigin);
  router.get('/getUser/:id' ,authController.getUser)
  router.get('/authToken/:token', verifyToken,(req, res)=>{
    res.json({message: ' bienvenido de nuevo',
    value: true})
  })
  router.get('/getUsers/' ,authController.getUsers)

router.post("/signup", authController.signup);
router.get("/:name", authController.GetUserByUsername);

router.get("/get/roles", authController.getRoles);

export default router;
