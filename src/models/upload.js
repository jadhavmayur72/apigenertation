const express=require("express")
const multer= require("multer")
const upload=multer({dest:"upload/"})

const app= express()
app.set("view engine","ejs")
app.get("/upload",(req,res)=>{
    res.render("upload")
})


app.post("/upload",(req,res)=>{
    res.render("Image uploaded")
})
app.listen(3001);
console.log("listining to posrt 3001")

