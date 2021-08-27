// initial code
require('dotenv').config()
const express = require('express');

//Database connection
const UthaanDB = require('./config/db.js')


const api = require('./routes/api')

const app = express();
const port = 4000;

//Route to fetch data
app.use('/api', api)


app.listen(process.env.PORT || port, () => {
    console.log(`Server running at port ${port}`)
});