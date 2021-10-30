const cors = require("cors");
const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200,
};

// initial code
require("dotenv").config();
const express = require("express");
var https = require('https');
var fs = require('fs');
//Database connection
const UthaanDB = require("./src/config/db.js");
const cloudinary = require("./src/config/cloudinary.js");

const auth = require("./src/routes/auth");
const api = require("./src/routes/api");

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const port = 8080;

//Route to fetch data

app.use("/api", api);


//Route for admin auth actions
app.use("/auth", auth);

// let httpsServer = https.createServer({
//     key: fs.readFileSync('server-key.pem'),
//     cert: fs.readFileSync('server-cert.pem')
// },app);

// httpsServer.listen(8080);
app.listen(process.env.PORT || port, () => {
    console.log(`Server running at port ${port}`);
});
