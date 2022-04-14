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

router.post("/upload",upload.single('blogimage') ,(req,res,next)=>{
    let fileinfo=req.file;
    let title= req.body.title;
    console.log(title);
    res.send(fileinfo)
})


router.post("/upload",upload.array('blogimage',5) ,(req,res,next)=>{
    let fileinfo=req.files;
    let title= req.body.title;
    console.log(title);
    res.send(fileinfo)
})
module.exports=router