const mongoose = require("mongoose");
const imgsSchema = new mongoose.Schema({
    pics:{type:String,required:true}

});
module.exports = mongoose.model("upload",imgsSchema)
