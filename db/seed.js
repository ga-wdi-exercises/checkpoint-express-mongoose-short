const Note = require("../models/Note");

Note.create(
  {
    author: "Velma",
    title: "Jinkies",
    body: "Pesky kids"
  },
  {
    author: "Shaggy",
    title: "Come on Scoob",
    body: "I'm hungry"
  }
);
