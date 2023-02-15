//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//


// This is a route handler that listens for HTTP GET requests on the root path ('/').
// The handler extracts query parameters from the request URL and uses them to find matching documents in a MongoDB collection using Mongoose.
//  The documents are returned to the client in JSON format as the response body.


const express = require("express");
const { costCollectionModel } = require("../models/costCollectionModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const user_id = req.query.user_id;
  const month = req.query.month;
  const year = req.query.year;
  try {
    const data = await costCollectionModel.find({
      year: { $eq: year },//The $eq operator is used to match exact values for each parameter.
      month: { $eq: month },
      user_id: { $eq: user_id },
    });
    res.json(data);
  } catch (err) {
    console.error(err); //res.json(data)// Return the matching documents as a JSON array in the response body using
    res.status(500).send("Error retrieving cost data");
  } // If an error occurs while retrieving the documents, a 500 error response is sent.
});

module.exports = router;
