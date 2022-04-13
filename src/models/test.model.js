const { Schema, model } = require("mongoose");
const testSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mobile_number: { type: Number, required: true },
  married: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
});

const Test_data = model("test", testSchema);
module.exports = Test_data;
