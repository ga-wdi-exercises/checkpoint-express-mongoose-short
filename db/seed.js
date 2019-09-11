const mongoose = require("./connection");
const seedData = require("../db/seedData.json")

const Note = require("../models/Note");
const User = require("../models/User");

// clear the database of records using both models
Note.deleteMany({}).then(() => {
    console.log("deleted all notes");
    User.deleteMany({}).then(() => {
      console.log("deleted all users");