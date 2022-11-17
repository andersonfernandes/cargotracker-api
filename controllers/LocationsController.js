const Location = require('../models/Location');

exports.getAllLocations = async (_, res) => {
  try {
    const locations = await Location.find({})
    res.json({ data: locations, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
