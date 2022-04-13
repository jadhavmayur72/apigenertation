const express = require("express")

const connect= require("./config/db")
const app=express()
app.use(express.json())

const test_controller= require("./controllers/test.controller")

app.use("/test",test_controller)





const start=()=>{
    app.listen(2001,async()=>{
        await connect()
        console.log("Listining to port 2001")
    })
}
start()
// module.exports=start