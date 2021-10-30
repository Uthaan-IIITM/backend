//for admin
const express = require("express");
const router = express.Router();
const { login } = require('../controllers/auth/login.js')
const { addAdmin } = require('../controllers/auth/addAdmin.js')
const isValidated = require('../middlewares/isValidated')

router.post('/login', login);
router.post('/addAdmin', isValidated, addAdmin);

module.exports = router