const express = require("express")
const logger= require("../logger.js/logger")
const path = require("path")

const upload = require("../middlewares/uploads")
const uploadImg=require("../models/uploadimg")
const images=require("../models/uploadimg")



const router= express.Router();


// single file upload--------------------------------------
 router.post("",upload.single("pics"),async(req,res,next)=>{
     const img = await uploadImg.create({
         pics:req.file.path
     })

     res.send(img)
 })


//  multiple file upload---------------------------------------
 router.post("",upload.array("pics",5),async(req,res,next)=>{
    const imgs = await uploadImg.create({
        pics:req.file.path
    })

    res.send(imgs)
})


router.get("/" ,async(req,res)=>{
    try{
        const img= await images.find({}).lean().exec()
        return res.status(201).send(img)


    }catch(err){
        logger.error(err)
    }
})
 module.exports = router












