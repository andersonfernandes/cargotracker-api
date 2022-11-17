const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const cargoSchema = new Schema({
  trackingId: {
    type: String,
    unique: true,
    required: true,
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  deadlineAt: Date,
});
 
module.exports = mongoose.model('Cargo', cargoSchema);
