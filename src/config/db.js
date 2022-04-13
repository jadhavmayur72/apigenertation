const mongoose= require("mongoose")
const url="mongodb://127.0.0.1:27017/practice"
const connect=()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/practice')
}
module.exports=connect