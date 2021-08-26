//all apis
const express = require('express');
const router = express.Router()
const { events } = require('../api/controllers/events')

//Redirect to events section
router.get('/events', events)

module.exports = router