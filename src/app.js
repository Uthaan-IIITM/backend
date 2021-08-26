// initial code
const express = require('express');
const api = require('./routes/api')

const app = express();
const port = 80

//Route to fetch data
app.use('/api', api)


app.listen(process.env.PORT || port, () => {
    console.log(`Server running at port ${port}`)
});