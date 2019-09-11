const Note = require("../models/Note");
const User = require("../models/User");

const seedData = require("./seedData.json");

Note.deleteMany({}).then( () => {
    Note.create(seedData).then(notes => {
      console.log(notes);
      process.exit();
    });
  });

User.deleteMany({}).then( () => {
    User.create(seedData).then(users => {
      console.log(users);
      process.exit();
    });
  });

