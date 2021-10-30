const bcrypt = require('bcrypt');
const admin = require('../../models/admin.js')

exports.addAdmin = async(req, res) => {

    //Extract data from request body
    const email = req.body.email;
    const password = req.body.password;

    //Check if fields are not empty
    if (!email || !password) {
        return res.send({
            status: 404,
            message: "Fields cannot be empty"
        }).end()
    }

    //Check if the email already exists
    const emailExists = await admin.exists({ email: email });
    if (emailExists) {
        return res.send({
            status: 404,
            message: "Email already exists"
        }).end()
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Add into Database
    const newAdmin = await admin.create({ email: email, password: hashedPassword })

    //Send a response
    return res.send({
        status: 200,
        message: "Admin created successfully"
    })

}