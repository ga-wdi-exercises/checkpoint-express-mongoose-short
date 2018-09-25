const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.redirect("/notes");
});

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
