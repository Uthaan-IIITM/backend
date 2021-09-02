//all apis
const express = require("express");
const router = express.Router();
import { addEvent, getEvents } from "../controllers/events";

//Redirect to events section
router.post("/create", addEvent);
router.get("/event", getEvents);

module.exports = router;
