const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const locationSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});
 
module.exports = mongoose.model('Location', locationSchema);
