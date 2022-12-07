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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cargo',
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
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
  voyage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voyage',
    required: true,
  },
});

module.exports = mongoose.model('Event', eventSchema);
