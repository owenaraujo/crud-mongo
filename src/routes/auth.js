import { Router } from "express";
import * as authController from "../controller/controller.auth";
const router = Router();
import{verifyToken} from '../middlewares/auth.jwt'

router.post('/signin', authController.sigin);
  router.get('/getUser/:id' ,authController.getUser)
  router.get('/authToken/', verifyToken,(req, res)=>{
    res.json({message: ' bienvenido de nuevo',
    value: true})
  })
  router.get('/getUsers/' ,authController.getUsers)
  router.delete('/user/:id/:rol',verifyToken ,authController.deleteUser)
  router.put('/user/:id/:rol' ,authController.activateUser)

router.post("/signup",verifyToken, authController.signup);
router.put("/edit/",verifyToken, authController.EditUser);
router.get("/:name", authController.GetUserByUsername);

router.get("/get/roles", authController.getRoles);

export default router;
