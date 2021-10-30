//for admin
const express = require("express");
const router = express.Router();
const { login } = require('../controllers/auth/login.js')

router.post('/login', login);

module.exports = router