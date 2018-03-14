const express = require("express");
const hbs = require("hbs");
const app = express();
const noteController = require("./controllers/messages");
var Note = require("./models/Note");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

app.use("/notes", noteController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
