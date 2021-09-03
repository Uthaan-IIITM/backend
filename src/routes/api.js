//all apis
const express = require("express");
const router = express.Router();
const { addEvent, getEvents } = require("../controllers/events")

//Redirect to events section
router.post("/events", addEvent);
router.get("/events", getEvents);

module.exports = router;