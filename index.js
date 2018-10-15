const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.redirect("/notes");
});

app.get("/notes", function(req, res) {
  res.render();
});

app.get("/notes/:id", function(req, res) {
  res.render("/show");
});

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
