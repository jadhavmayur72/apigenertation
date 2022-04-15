const express = require("express")
const logger= require("../logger.js/logger")
const path= require("path")
const multer= require("multer")
const upload = require("../../middlewares/upload")
const uploadImg=require("../models/uploadimg")
const async = require("hbs/lib/async")
// const async = require("hbs/lib/async")

const router= express.Router();

 router.post("",upload.single("image"),async(req,res,next)=>{
     const img = await uploadImg.create({
         image:req.body.path
     })

     res.send(img)
 })
 module.exports = router

// const storage=multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,path.join(__dirname,"../Uploads"))

//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + file.originalname)
//     }
// })


// //  to store the upload--------------------
// const upload =multer({storage:storage})



// // router.get('/create',function(req,res,next){
// //     res.render('create',{title: 'Create Blog'})
    
// // })

// // to post to upload(single)-----------------------ss
// router.post("",upload.single("image") ,async(req,res,next) => {
//     const x = await uploadImg.create({
//         image:req.body.path
//     })
//     // let title= req.body.title;
//     logger.info( "file is uploaded");
//     res.send(x)
// })




// // const uploadsingle= (fieldName)=>{
// //     return(req,res,next)=>{
// //         const uplaodItem=upload.single(fieldName)
// //         uplaodItem(req,res,function(err){
// //             if(err instanceof multer.MulterError){
// //                 res.send
// //             }
// //         })
// //     }
// // }



// // to post to upload(multiple)-----------------------


// // router.post("/upload",upload.array('blogimage',5) , function(req,res,next){
// //     let fileinfo=req.files;
// //     // let title= req.body.title;
// //     // logger.info(title);
// //     res.send(fileinfo)
// // })
// logger.info(" blogss running succesfully")
// module.exports=router

