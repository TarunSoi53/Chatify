import express from 'express';
import { registerUser,loginUser } from '../controllers/authcontroller.js';

const router= express.Router();



router.post("/signup",registerUser);
router.post("/login",loginUser);


router.get("/logout",(req,res)=>{
    res.send("SignUp Page");
});

export default router;
