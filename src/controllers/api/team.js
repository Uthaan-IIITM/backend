const teams = require('../../models/teamModel')

//fucntion to fetch all the team members
const getTeams = async(req, res) => {

    //Fetch the team members based on role
    const founders = await teams.find({ role: 'Founder' }).sort({ rollNumber: 1 })
    const alumni = await teams.find({ role: 'Alumini' }).sort({ rollNumber: 1 })
    const executive = await teams.find({ role: 'Executive' }).sort({ rollNumber: 1 })

    res.send({
        status: 200,
        data: { founders, alumni, executive }
    })

}


/**
 * @description To add new team members to the collection you
 * @request_body 
 * {    name,
 *      rollNumber,
 *      department,
 *      image,
 *      statement,
 *      links:{facebook,github,instagram,linkedin,email}
 *      role
 * }
 */
const addTeamMember = async(req, res) => {

    //create a new object for th member and make roll number as the _id
    const newMember = await teams
        .create({...req.body, _id: req.body.rollNumber })
        .catch(err => {
            console.log(err)
            res.json({
                status: 401,
                message: err.message,
            }).end()
        })

    await newMember.save()
    res.send({
        status: 200,
        data: newMember
    })
}

//function to update the details of a new team member
const updateTeamMember = async(req, res) => {

    await teams
        .findByIdAndUpdate(req.params.rollNumber, req.body)
        .catch(err => {
            res.json({
                status: 401,
                message: err.message,
            })
        })

    const member = await teams.find({ rollNumber: req.params.rollNumber })
    res.send({
        status: 200,
        data: member
    })
}

module.exports = { getTeams, addTeamMember, updateTeamMember }