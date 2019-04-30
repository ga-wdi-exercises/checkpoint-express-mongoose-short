const mongoose = require("./connection");
const users = require("../controllers/users");
const notes = require("../controllers/notes");

const User = require("./models/User");
const Note = require("./models/Note");

User.find({}).remove(() => {
  User.create(users);
});

Note.find({}).remove(() => {
  Note.create(notes);
});
