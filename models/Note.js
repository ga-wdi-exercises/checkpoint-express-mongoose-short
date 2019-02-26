const mongoose = require("../db/connection");

const Notes = new mongoose.Schema({
  author: "string",
  title: "string",
  body: "string"
});

module.exports = mongoose.model("Notes", Notes);
