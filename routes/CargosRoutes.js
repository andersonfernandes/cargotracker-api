const express = require('express');
const { getAllCargos, createCargo, getCargoByTrackingId } = require('../controllers/CargosController');
 
const router = express.Router();
 
router.route('/').get(getAllCargos).post(createCargo);
router.route('/:trackingId').get(getCargoByTrackingId);
 
module.exports = router;
