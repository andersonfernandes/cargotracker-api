const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const cargoSchema = new Schema({
  trackingId: {
    type: String,
    unique: true,
    required: true,
  },
  source: String,
  destination: String,
  deadlineAt: Date,
});
 
module.exports = mongoose.model("Cargo", cargoSchema);
