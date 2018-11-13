const mongoose = require("./connection");
const seeds = require("./seedData");
const Note = require("./models/Note");

mongoose.Promise = Promise;

Note.remove({}).then(_ => {
  console.log("Dropped the DB");
  Note.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
