//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//

// This code defines a router for a GET request to the root path ("/") of an Express application.
//  The router returns a JSON response with an array of developer objects.Express


const express = require("express");
const router = express.Router();


// Define a GET request handler:
router.get("/", (req, res) => {
  // Json format
  const developers = [
    {
      firstname: "Omer",
      lastname: "Boucris",
      id: 314969817,
      email: "buckomer@gmail.com",
    },
    {
      firstname: "Bar",
      lastname: "Bikovsky",
      id: 315941633,
      email: "bar1515@gmail.com",
    },
  ];
  res.json(developers);
});

 module.exports = router;

