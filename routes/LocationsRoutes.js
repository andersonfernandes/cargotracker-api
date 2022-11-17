const express = require('express');
const { getAllLocations } = require('../controllers/LocationsController');
 
const router = express.Router();
 
router.route('/').get(getAllLocations);
 
module.exports = router;
