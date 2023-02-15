
// //**********Submits:***********//
// //***Omer Boucris  314969817***//
// //***Bar Bikovsky 315941633***//

// This file that connects to a MongoDB database and creates 
// a new user if they do not already exist in the database. 
// It uses the Mongoose library to interact with the MongoDB database.

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { costCollectionModel } = require('../models/costCollectionModel');
const { usersModel } = require('../models/usersModel');

dotenv.config();

// Define the connection URL to the MongoDB Atlas cluster:
const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;
const url = `mongodb+srv://${userName}:${password}@cluster0.tdht9hw.mongodb.net/?retryWrites=true&w=majority`;

// Define an async function to connect to the database:
async function connectToDatabase() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Create a new user object:
const user = new usersModel({
  id: "123123",
  first_name: "Moshe",
  last_name: "Israeli",
  birthday: new Date(1990, 01, 10),
});

// Define an asynchronous function called createUserIfNotExists that takes a user object as input and creates a new user in the database
// if they do not already exist.
async function createUserIfNotExists(user) {
  try {
    // Check if user already exists
    const existingUser = await usersModel.findOne({ id: user.id });
    if (existingUser) {
      console.log("User already exists, not creating");
      return existingUser;
    }
    // Create new user
    const newUser = await usersModel.create(user);
    console.log(`new User created: ${newUser}`);
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Add event listeners for the mongoose.connection object:
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error!\nCould not connect to the Data Base!");
});
db.once("open", () => {
  console.log("connected!");
});

// Call the connectToDatabase function to connect to the database and create the user:
connectToDatabase()
  .then(() => createUserIfNotExists(user))
  .then(() => {
    // Export the mongoose and usersModel objects:
    exports.mongoose = mongoose;
    exports.usersModel = usersModel;
  })
  .catch((error) => console.error("Error:", error));

  // createUserIfNotExists(user).then(console.log);
// exports.default = mongoose;
// exports.default = usersModel;
