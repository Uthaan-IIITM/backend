const shows = require('../models/showsModel.js')

//For fetching the show
exports.getShow = async(req, res) => {

    //Extracting name of the show and season
    const queryString = new URLSearchParams(req.query)
    const name = queryString.get("name")
    const season = parseInt(queryString.get("season"))

    //Find the show in the database and take the url 
    try {
        await shows.findOne({ name: name, season: season })
            .then((result, err) => {
                if (err) {
                    console.log(err)
                    res.send({ status: 404, message: err.message })
                } else {
                    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.GOOGLE_API_KEY}&playlistId=${result.playlistId}&part=snippet&maxResults=50`
                    res.send({ status: 200, url: url })
                }
            })
    } catch (err) {
        console.log(err)
        res.send({ status: 404, message: err.message })
    }
}

//For adding a new show to the database
exports.addShow = async(req, res) => {
    console.log(req.body)

    //Extract the fields from the request body
    const name = req.body.name
    const season = parseInt(req.body.season)
    const playlistId = req.body.playlistId

    //Check for field validation
    if (!name || !season || !playlistId) {
        res.send({ status: 400, message: "Fields cannot be empty" })
    }

    //Create an instance and save into database
    const newShow = new shows({
        name: name,
        season: season,
        playlistId: playlistId
    })

    try {
        newShow.save((err, result) => {
            if (err) {
                console.log(err)
                res.send({ status: 500, message: err.message })
            }
            res.send({ status: 200, message: "show added successfully", data: result })
        })
    } catch (err) {
        console.log(err)
        res.send({ status: 404, message: err.message })
    }
}