const Note = require("../models/note");

Note.remove({}).then(function() {
  Note.create({
    author: "Cathy",
    title: "Monday homework",
    body: "blah blah"
  });
  Note.create({
    author: "Cathy",
    title: "Checkpoint",
    body: "Study for Express checkpoint"
  });
});
