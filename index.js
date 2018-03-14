const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const noteController = require("..");
const app = express();

app.set("view engine", "hbs");

app.use("/notes", noteController);

app.get("/", (req, res) => {
  Note.find({}).then(function(notes){
      res.render("index", {notes});
  })
app.listen(3000, () => console.log("its connected!"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
