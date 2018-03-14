const Note = require("../models/Notes");
const seedData = require("./seeds.json");

Note.Remove({}).then(() => {
  Promise.all([
    Note.create({
      noteTitle: "String",
      body: "String",
      author: "String"
    })
  ]).then(() => {
    console.log("it took!");
    process.exit();
  });
});
