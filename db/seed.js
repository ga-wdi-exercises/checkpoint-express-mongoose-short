const Note = require("../models/Note");

Note.remove({}).then(function() {
  Note.create({
    title: "Note 1",
    author: "Konjo",
    body: "Passion"
  });

  Note.create({
    title: "Note 2",
    author: "Konjo",
    body: "Discovery"
  });

  Note.create({
    title: "Note 3",
    author: "Konjo",
    body: "Beautiful"
  });
});
