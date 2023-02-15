// //**********Submits:***********//
// //***Omer Boucris  314969817***//
// //***Bar Bikovsky 315941633***//


// // This is a router module that creates a new cost using a POST request. It starts by importing the necessary modules and models.
// //  Then, it defines a router object and uses the body-parser middleware to parse the request body



const express = require("express");
const url = require("url");
const { costCollectionModel } = require("../models/costCollectionModel");
const { usersModel } = require("../models/usersModel");
const bodyParser = require("body-parser");
const router = express.Router();
//The router uses the body-parser middleware to parse the request body.

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", function (req, res) {
  const user_id = req.body.user_id;
  const month = req.body.month;
  const day = req.body.day;
  const year = req.body.year;
  const currentDate = new Date();

  console.log(user_id); // Check

  usersModel.findOne({ id: user_id }, function (err, user) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error occurred while finding user");
    }

    if (!user) {
      return res.status(500).send("The User not found!");
    }

    const updated_year = year || currentDate.getFullYear();
    const updated_month = month || currentDate.getMonth() + 1;
    const updated_day = day || currentDate.getDate();

    const cost = new costCollectionModel({
      user_id: user_id,
      year: updated_year,
      month: updated_month,
      day: updated_day,
      description: req.body.description,
      category: req.body.category,
      sum: req.body.sum,
    });

    cost.save(function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error creating cost");
      } else {
        console.log(`create new cost: ${cost}`);
        res.status(200).send("Cost created successfully");
      }
    });
  });
});
//If the user does not exist, it returns a 500 status code and an error message
module.exports = router;

