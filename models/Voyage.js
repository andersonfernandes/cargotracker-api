const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  number: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model('Voyage', voyageSchema);
