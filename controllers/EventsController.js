const Event = require('../models/Event');

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
    const event = await Event.find({}).populate('cargo').where('cargo.trackingId').equals(req.params.trackingId);
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
