const path= require("path")
const multer= require("multer")


const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"../src/Uploads"))

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})

function fileFilter (req, file, cb) {
if(file.mimetype === "image/jpeg"){
    cb(null, true)
}else{
    cb(null, false)
}
  
}
//  to store the upload--------------------
const upload =multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports = upload

