import { Router } from "express";
import * as authController from "../controller/controller.auth";
const router = Router();
import passport from 'passport'

router.post('/signin', (req, res, next) => {

    passport.authenticate('local.signin', {
      successRedirect: '/mantenimiento',
      failureRedirect: '/',
    })(req, res, next);
  });
  router.get('/getUser' ,authController.getUser)
router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})
router.post("/signup", authController.signup);
router.get("/search", authController.GetUserByNombre);

export default router;
