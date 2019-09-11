const Note = require("../../models/Note");
const User = require("../../models/User");

const noteJsonData = require("../db/seedData.json");
const userSeedData = require("../db/userData.json");

Note.deleteMany({})
  .then(() => {
    Note.create(noteSeedData)
      .then(notes => console.log(notes))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

  User.deleteMany({})
  .then(() => {
    User.create(userJsonData)
      .then(users => console.log(users))
      .catch(err => console.log(err)); 
  })
  .catch(err => console.log(err));
