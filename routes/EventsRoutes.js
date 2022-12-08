const express = require('express');
const { getAllEvents, getEventByTrackingId, createEvent } = require('../controllers/EventsController');
 
const router = express.Router();
 
router.route('/').get(getAllEvents).post(createEvent);
router.route('/:trackingId').get(getEventByTrackingId);
 
module.exports = router;
