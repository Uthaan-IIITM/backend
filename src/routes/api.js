//all apis
const express = require("express");
const router = express.Router();
const { addEvent, getEvents } = require("../controllers/events")
const { getShow, addShow } = require("../controllers/shows")
const { getArticles } = require('../controllers/articles')
const { getInterviews } = require('../controllers/interviews')

//Redirect to events section
router.get("/events", getEvents);
router.post("/events", addEvent);

//Redirect to shows section
router.get("/shows", getShow);
router.post("/shows", addShow);

//Redirect to articles section
router.get("/articles", getArticles);

//Redirect to articles section
router.get("/interviews", getInterviews);

module.exports = router;