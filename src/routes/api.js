//all apis
const express = require("express");
const router = express.Router();
const { addEvent, getEvents } = require("../controllers/events")
const { getShow, addShow } = require("../controllers/shows")

//Redirect to events section
router.get("/events", getEvents);
router.post("/events", addEvent);

//Redirect to shows section
router.get("/shows", getShow);
router.post("/shows", addShow);

module.exports = router;