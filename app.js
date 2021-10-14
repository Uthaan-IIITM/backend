const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

// initial code
require("dotenv").config();
const express = require("express");

//Database connection
const UthaanDB = require("./src/config/db.js");
const cloudinary = require("./src/config/cloudinary.js");

const auth = require("./src/routes/auth");
const api = require("./src/routes/api");

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const port = 4000;

//Route to fetch data
app.use("/api", api);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at port ${port}`);
});
