const jwt = require('jsonwebtoken');
const admin = require('../models/admin.js')
const { JWT_KEY } = require('../config/env.js')

const isValidated = async(req, res, next) => {

    //Verify the token
    const verifiedToken = jwt.verify(req.headers.token, JWT_KEY)

    //If token is not valid,then send a response
    if (!verifiedToken) {
        return res.send({
            status: 404,
            message: "Invalid token"
        }).end()
    }

    //If token is valid, then search for admin in the database
    const adminExists = await admin.findOne({ email: verifiedToken.email })

    //If admin is not found, then send a response
    if (!adminExists) {
        return res.send({
            status: 404,
            message: "Admin not found"
        })
    }

    //Move to next function
    next()
}

module.exports = isValidated