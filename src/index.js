require("dotenv").config()
const express = require("express")


const connect= require("./config/db")
const app=express()
app.use(express.json())

const test_controller= require("./controllers/test.controller")

app.use("/test",test_controller)
const port = process.env.PORT




const start=()=>{
    app.listen(port,async()=>{
        await connect()
        console.log(`Listining to port ${port}`)
    })
}
start()
// module.exports=start