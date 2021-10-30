// all the env variables
require("dotenv").config();

module.exports = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
  UTHAAN_DB_CONN_STRING: process.env.UTHAAN_DB_CONN_STRING,
  JWT_KEY: process.env.JWT_KEY,
};
