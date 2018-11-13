const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const NotesCtrl = require("./controllers/notesCtrl");
const app = express();

app.use(methodOverride("_method"));
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use("/", NotesCtrl);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
