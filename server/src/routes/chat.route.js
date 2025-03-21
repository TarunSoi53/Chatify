import express from 'express';


const router= express.Router();

router.get("/messages/:reciverid",getMessages)
router.post("/messages/:reciverid",PostMessages)



router.get("/userlist/",getUserList)
