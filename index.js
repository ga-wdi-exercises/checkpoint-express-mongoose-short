const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const Note = require("./models/Note");

const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

const messageController = require("./controllers/messages");

app.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

app.use("/notes", messageController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
