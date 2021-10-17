const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const formidable = require('formidable')
const cloudinary = require("../config/cloudinary")
const Images = require('../models/imageModel')
const fs = require('fs')


/**
 * @description to get all the images in the database
 * @response contains an array of objects consisting object Id and image url : [{_id,url}]
 */
exports.getImages = async(req, res) => {
    try {
        const data = await Images.find().select('url')
        res.send({ status: 200, data: data }).end()
    } catch (e) {
        console.log(e)
        res.send({ status: 401, message: err.message }).end()
    }
}

/**
 * @description To upload images for the gallery
 * @request_body Images will come in formdata
 * @response {status:400,message} for SUCCESS,{status:401,message} for FAILURE
 */

exports.uploadImage = async(req, res) => {
    try {
        //Parse the form data
        const form = new formidable.IncomingForm();
        form.parse(req, async(error, fields, file) => {
            if (error) {
                console.log(error);
                res.send({ status: 401, error: error.message }).end();
            } else {

                //Upload the image
                for (let key in file) {
                    await cloudinary.uploader.upload(file[key].path, { folder: "gallery/", use_filename: true }, async(err, result) => {

                        // Add urlin the database
                        let newImage = await Images.create({ url: result.secure_url });
                    });
                }

                res.send({ status: 200, message: "Image added successfully" });
            }
        });
    } catch (err) {
        console.log(err);
        res.send({ status: 401, message: err.message }).end();
    }
}

/**
 * @description Delete all images in the database
 */
exports.deleteAllImages = async(req, res) => {
    try {
        await Images.deleteMany()
        res.send({ status: 200, data: null })
    } catch (err) {
        res.send({ status: 401, message: err.message })
    }
}


/**
 * @description to delete an existing image
 * @request_url contains the imageId in parameters 
 */

exports.deleteImage = async(req, res) => {

    try {
        const imageId = req.params.imageId

        //check if the image exists in the database
        const existsImage = await Images.exists({ _id: imageId })

        if (!existsImage) {
            res.send({ status: 401, message: "Image not found" }).end()
        }

        //Delete the image from the database
        await Images.deleteOne({ _id: imageId })
        res.send({ status: 200, message: "Image deleted successfully" }).end()

    } catch (err) {
        console.log(err)
        res.send({ status: 401, message: err.message })
    }

}