const User = require("../models/User");
const { Note } = require("../models/Note");

User.find({}).remove(() => {
  Note.find({}).remove(() => {
  });
});

User.create({})
