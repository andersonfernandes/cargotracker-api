const Cargo = require('../models/Cargo');

exports.getAllCargos = async (_, res) => {
  try {
    const cargos = await Cargo.find({}).populate(['source', 'destination']);
    res.json(cargos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCargoByTrackingId = async (req, res) => {
  try {
    const cargo = await Cargo.findOne({ trackingId: req.params.trackingId }).populate(['source', 'destination']);
    res.json(cargo);
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
    res.json(cargo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
