const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mobile_number: { type: Number, required: true },
  married: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
});

const userData = model("user", userSchema);
module.exports = userData;