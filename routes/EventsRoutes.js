const express = require('express');
const { getAllEvent } = require('../controllers/EventsController');
 
const router = express.Router();
 
router.route('/').get(getAllEvent);
 
module.exports = router;
