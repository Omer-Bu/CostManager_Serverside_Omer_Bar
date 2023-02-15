//**********Submits:***********//
//***Omer Boucris  314969817***//
//***Bar Bikovsky 315941633***//

// This code defines a Mongoose schema for a user object and exports a model for the schema called usersModel. //
// Here's a brief overview of what the code does: //

const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    birthday:Date
})
// Define the usersModel:
const usersModel = mongoose.model("users",usersSchema);
exports.usersModel = usersModel;