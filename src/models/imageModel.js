// Event Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const imageSchema = new Schema({
    url: { type: String, required: true },
    _v: false
});

const image = new model("image", imageSchema);

module.exports = image;