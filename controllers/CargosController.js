const Cargo = require('../models/Cargo');

exports.getAllCargos = async (_, res) => {
  try {
    const cargos = await Cargo.find({})
    res.json({ data: cargos, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCargoByTrackingId = async (req, res) => {
  try {
    const cargo = await Cargo.findOne({ trackingId: req.params.trackingId });
    res.json({ data: cargo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCargo = async (req, res) => {
  try {
    const cargoParams = {
      trackingId: Math.floor(Math.random() * 16777215).toString(16),
      ...req.body,
    }

    const cargo = await Cargo.create(cargoParams);
    res.json({ data: cargo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
