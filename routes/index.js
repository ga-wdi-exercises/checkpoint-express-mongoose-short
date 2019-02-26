const express = require("express");
const app = express.Router();

app.get("/", function(req, res) {
  res.redirect("./notes");
});

app.get("/notes", function(req, res) {
  res.render({ type: "GET" });
});

app.get("/notes/:id", function(req, res) {
  res.render({ type: "GET" });
});

module.exports = router;
