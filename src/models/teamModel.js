// Team member Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const teamsSchema = new Schema({
    _id: { type: String, refPath: 'rollNumber' },
    rollNumber: { type: String, required: true },
    name: {
        type: String,
        required: true,
    },
    department: { type: String },
    image: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    links: {
        facebook: { type: String },
        github: { type: String },
        instagram: { type: String },
        linkedin: { type: String },
        email: { type: String },
    },
    role: {
        type: String,
        required: true,
        values: ['founder', 'alumni', 'executive']
    }
});

const teams = new model("team", teamsSchema);

module.exports = teams;