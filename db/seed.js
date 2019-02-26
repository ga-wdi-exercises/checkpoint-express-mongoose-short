const Note = require("../models/Note");

Note.remove({}).then(function() {
  Note.create({
    title: "My note",
    author: "Paul Blake",
    body: "I really wish this test would pass"
  }).then(()=>{
    console.log("DB Seeded");
  })
})