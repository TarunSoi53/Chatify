import express from 'express';
import { getMessages, sendMessage,getUserList } from '../controllers/chat.Controller.js';
import {userAuthnicate} from '../middlewares/UserAuthnicate.js';


const router= express.Router();

router.get("/messages/:receiverId",userAuthnicate,getMessages)
router.post("/messages/:receiverId",userAuthnicate,sendMessage)



router.get("/userlist/",userAuthnicate,getUserList)
export default router;

