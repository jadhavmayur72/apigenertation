require("dotenv").config()
const express = require("express")
// const path= require("path")
// const hbs=require("hbs")
const logger=require("../src/logger.js/logger")


const connect= require("./config/db")
const app=express()
app.use(express.json())

// app.set('views', path.join(__dirname,'views'))
// app.set('view engine', hbs)

const userController= require("./controllers/user.controller")
const blogController=require("./routes/blogs")

app.use("/test",userController)
const port = process.env.PORT
app.use("/blogs",blogController)
app.use("/uploads",blogController)




const start=()=>{
    app.listen(port,async()=>{
        await connect()
        logger.info(`Listining to port ${port}`)
    })
}
start()
// module.exports=start