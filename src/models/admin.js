// Event Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const admins = new model("admin", adminSchema);

module.exports = admins;