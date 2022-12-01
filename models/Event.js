const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cargo = require('./Cargo');
const Location = require('./Location');
const Voyage = require('./Voyage');

const eventSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['LOAD', 'UNLOAD', 'RECEIVE', 'CLAIM', 'CUSTOMS']
  },
  cargo: {
    type: Cargo,
    required: true,
  },
  location: {
    type: Location,
    required: true,
  },
  completedAt: {
    type: Date,
    required: true,
  },
  registrationAt: {
    type: Date,
    required: true,
  },
  voyage: Voyage,
});

module.exports = mongoose.model('Event', eventSchema);
