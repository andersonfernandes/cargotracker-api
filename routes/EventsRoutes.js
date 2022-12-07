const express = require('express');
const { getAllEvents } = require('../controllers/EventsController');
 
const router = express.Router();
 
router.route('/').get(getAllEvents);
 
module.exports = router;
