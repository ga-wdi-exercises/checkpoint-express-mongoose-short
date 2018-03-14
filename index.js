const express = require("express");
const hbs = require("hbs");
const Note = require("./models/Note");
const noteController = require("./controllers/messages");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "hbs");

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

// app.use("/notes", noteController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
