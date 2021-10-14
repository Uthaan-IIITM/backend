// Team member Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        default: "None"
    },
    message: {
        type: String,
        required: true
    },
    resolved: { //This field determines whether the message has been responded or not
        type: Boolean,
        required: true,
        default: false
    }
});

const message = new model("message", messageSchema);

module.exports = message;