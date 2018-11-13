const express = require("express");
const bodyParser = require("body-parser");
const NotesCtrl = require("./controllers/notesCtrl");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");

app.use("/", NotesCtrl);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
