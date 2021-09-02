// Event Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const eventSchema = new Schema({
  name: String,
  description: String,
  image: String,
});

const events = new model("event", eventSchema);

module.exports = events;
