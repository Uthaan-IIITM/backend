const events = require("../../models/eventModel.js")
const formidable = require("formidable")
const cloudinary = require("../../config/cloudinary.js")

exports.addEvent = (req, res) => {
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, (error, fields, file) => {
            if (error) {
                return res.status(400).json({
                    error: "Error uploading file",
                });
            } else {
                cloudinary.uploader.upload(file.image.path, { folder: "events/" }, (err, result) => {

                    let event = new events();
                    event.name = fields.name;
                    event.description = fields.description;
                    event.year = parseInt(fields.year);
                    event.image = result.secure_url;
                    event.save((err, result) => {
                        if (err) {
                            res.status(401);
                            console.log(err);
                            return res.send({ message: "error adding the event" });
                        } else {
                            res.status(200);
                            return res.send({ message: "event added" });
                        }
                    });
                });
            }
        });
    } catch (err) {
        res.status(400);
        return res.send({ message: "error occurred" });
    }
}

exports.getEvents = async(req, res) => {

    try {
        await events
            .find({})
            .sort({ _id: -1 })
            .then((result) => {
                res.status(200);
                return res.send(result);
            })
            .catch((err) => {
                res.status(400);
                return res.send({ message: "error fetching data" });
            });
    } catch (err) {
        res.status(400);
        return res.send({ message: "error occurred" });
    }
}