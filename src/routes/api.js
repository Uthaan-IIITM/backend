//all apis
const express = require("express");
const router = express.Router();
const { addEvent, getEvents } = require("../controllers/events")
const { getShow, addShow } = require("../controllers/shows")
const { getArticles } = require('../controllers/articles')
const { getInterviews } = require('../controllers/interviews')
const { getTeams, addTeamMember, updateTeamMember } = require('../controllers/team')

//Redirect to events section
router
    .get("/events", getEvents)
    .post("/events", addEvent);

//Redirect to shows section
router
    .get("/shows", getShow)
    .post("/shows", addShow);

//Redirect to articles section
router.get("/articles", getArticles);

//Redirect to articles section
router.get("/interviews", getInterviews);

//Redirect to teams section
router
    .get("/teams", getTeams)
    .post("/teams", addTeamMember)
    .patch("/teams/:rollNumber", updateTeamMember)

module.exports = router;