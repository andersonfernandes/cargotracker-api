const Event = require('../models/Event');
const Cargo = require('../models/Cargo');

exports.getAllEvents = async (_, res) => {
  try {
    const event = await Event.find({})
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventByTrackingId = async (req, res) => {
  try {
    const cargo = await Cargo.findOne({ trackingId: req.params.trackingId })
    const event = await Event.find({ cargo: cargo }).populate('cargo');
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
