var express = require("express");
const NotesCtrl = require("./controllers/NotesCtrl");
const hbs = require("hbs");
var app = express();

app.use("/", NotesCtrl);
app.set("view engine", "hbs");

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
