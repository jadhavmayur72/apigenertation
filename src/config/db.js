const mongoose= require("mongoose")
const logger= require("../logger.js/logger")
require("dotenv").config()
const connect=()=>{
    logger.warn ("mongoo running succesfully")
    return mongoose.connect(process.env.url)
}
module.exports=connect