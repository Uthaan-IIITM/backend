require('dotenv').config()
const mongoose = require('mongoose');
const { UTHAAN_DB_CONN_STRING } = require('./env.js')

mongoose.connect(`${UTHAAN_DB_CONN_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true });

const UthaanDB = mongoose.connection
UthaanDB.on('error', console.error.bind(console, "Error connecting to database"))
UthaanDB.once('open', () => {
    console.log("Connected to database successfully")
    module.exports = UthaanDB
})