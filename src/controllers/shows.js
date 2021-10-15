const shows = require("../models/showsModel.js");

//For fetching the show
exports.getShow = async (req, res) => {
  //Find the show in the database and take the url
  try {
    let dataReceived = await shows.find({}, { _id: 0, __v: 0 });
    res.send({ status: 200, data: dataReceived });
  } catch (err) {
    console.log(err);
    res.send({ status: 404, message: err.message });
  }
};

//For adding a new show to the database
exports.addShow = async (req, res) => {
  //Extract the fields from the request body
  const name = req.body.name;
  const playlistIDs = req.body.playlistIDs;

  //Check for field validation
  if (!name || !playlistIDs) {
    return res.send({ status: 400, message: "Fields cannot be empty" });
  }

  if (!Array.isArray(playlistIDs)) {
    return res.send({
      status: 400,
      message: "playlistIDs must be of type Array",
    });
  }

  //Create an instance and save into database
  const newShow = new shows({
    name: name,
    playlistIDs: playlistIDs,
  });

  try {
    newShow.save((err, result) => {
      if (err) {
        console.log(err);
        return res.send({ status: 500, message: err.message });
      }
      res.send({
        status: 200,
        message: "show added successfully",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
    res.send({ status: 404, message: err.message });
  }
};
