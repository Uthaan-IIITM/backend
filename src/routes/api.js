//all apis
const express = require("express");
const router = express.Router();
const { addEvent, getEvents } = require("../controllers/events")
const { getShow, addShow } = require("../controllers/shows")
const { getArticles } = require('../controllers/articles')
const { getInterviews } = require('../controllers/interviews')
const { getTeams, addTeamMember, updateTeamMember } = require('../controllers/team')
const { getMessages, sendMessage } = require('../controllers/messages')
const { getImages, uploadImage, deleteAllImages, deleteImage } = require('../controllers/images')

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

//Redirect to messages section
router
    .get("/messages", getMessages)
    .post("/messages", sendMessage)

//Redirect to images section
router
    .get("/images", getImages)
    .post("/images", uploadImage)
    .delete("/images", deleteAllImages)
router
    .delete("/images/:imageId", deleteImage)

module.exports = router;