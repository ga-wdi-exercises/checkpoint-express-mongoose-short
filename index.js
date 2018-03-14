const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();
const messageController = "controllers/messages";

app.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

app.use("/message", messageController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
