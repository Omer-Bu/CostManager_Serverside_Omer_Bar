//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//

// This is a simple express route that returns a JSON response of a message "Express :)"
// when a GET request is made to the root path (/).


const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const homePage = [{ message: "Express :)" }];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(homePage));
});

module.exports = router;
