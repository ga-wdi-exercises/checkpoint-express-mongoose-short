const mongoose = require("./connection");

const Notes = require("../models/Note");
const Users = require("../models/User");

// const notesSeedData = no seed data
// const usersSeedData = no seed data

Users.deleteMany({}).then(() => {
  Users.create(usersSeedData).then(users =>
    console.log(users))
})

Notes.deleteMany({}).then(() => {
  Notes.create(notesSeedData).then(notes =>
    console.log(notes))
})