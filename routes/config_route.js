//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//

// This code exports a function routeInit that takes an Express app object as an argument,
//  and then attaches different route handlers to different paths using the app.use method.

// routeInit which takes an Express application object app as a parameter.
//Four routes are defined:


const addCostR = require("./addCost");
const reportR = require("./report");
const aboutR = require("./about");
const indexR = require("./index");
// -MIDELAWARE-app.use() method to define middleware for various routes in the application

function routeInit(app) {
  app.use("/addCost", addCostR);
  app.use("/report", reportR);
  app.use("/about", aboutR);
  app.use("/", indexR);
}

module.exports = {
  routeInit
};
