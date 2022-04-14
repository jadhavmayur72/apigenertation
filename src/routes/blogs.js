const express = require("express")

const multer= require("multer")
const router= express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})

const upload =multer({storage:storage})
router.get('/create',(req,res,next)=>{
    res.render('create',{title: 'Create Blog'})
    
})

router.post("/upload",upload)

module.exports=router