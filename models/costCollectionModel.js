// //**********Submits:***********//
// //***Omer Boucris  314969817***//
// //***Bar Bikovsky 315941633***//

// // This file defines a Mongoose model for the costSchema called costCollectionModel and exports it.//
// //  The model is registered with the mongoose object and specifies the name of the collection in the database. //



// Import the required modules:
const crypto = require("crypto");
const mongoose = require("mongoose");

// Define the costSchema:
const costSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    require: true,
  },
  year: {
    type: Number,
    required: false,
    validate: [checkYear, "Allowed session values are 1900 to 2023"],
  },
  month: {
    type: Number,
    required: false,
    validate: [checkMonth, "Allowed session values are 1 to 12"],
  },
  day: {
    type: Number,
    required: false,
    validate: [checkDay, "Allowed session values are 1 to 31"],
  },
  id: {
    type: String,
    index: true,
    required: false,
    unique: true,
    default: () => crypto.randomUUID(),
  },
  description: String,
  category: {
    type: String,
    enum: [`food`, `health`, `housing`, `sport`, `education`, `transportation`, `other`],
  },
  sum: Number,
});

// Define validation functions:
// These functions are used to validate the day, month, and year fields of the cost object.
function checkDay(v) {
  return v >= 1 && v <= 31;
}
function checkMonth(v) {
  return v >= 1 && v <= 12;
}
function checkYear(v) {
  return v >= 1900 && v <= 2023;
}

// Define the costCollectionModel:
const costCollectionModel = mongoose.model("costs", costSchema);
exports.costCollectionModel = costCollectionModel;
