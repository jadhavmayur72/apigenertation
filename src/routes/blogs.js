const express = require("express")
const logger= require("../logger.js/logger")
const path = require("path")

const upload = require("../middlewares/uploads")
const uploadImg=require("../models/uploadimg")

// const async = require("hbs/lib/async")

const router= express.Router();

 router.post("",upload.single("pics"),async(req,res,next)=>{
     const img = await uploadImg.create({
         pics:req.file.path
     })

     res.send(img)
 })
 module.exports = router












