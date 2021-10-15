const Messages = require('../models/messageModel')

/**
 * @description to send message to Uthaan Club through the website
 * @request_body has {name,contact,email,message}  
 */

exports.sendMessage = async(req, res) => {

    try {
        await Messages
            .create({...req.body, resolved: false })

        res.send({ status: 200, messages: "Message sent successfully" })
    } catch (err) {
        res.send({ status: 401, message: err.message })
    }
}

/**
 * @description to get all the messages sent to Uthaan
 */
exports.getMessages = async(req, res) => {

    try {
        const messages = await Messages
            .find().limit(process.env.MESSAGE_LIMIT)
            .catch(err => {
                res.send({ status: 401, message: err.message }).end()
            })

        res.send({ status: 200, data: messages }).end()
    } catch (err) {
        res.send({ status: 401, message: err.message }).end()
    }
}