// Event Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const events = new model("event", eventSchema);

module.exports = events;
