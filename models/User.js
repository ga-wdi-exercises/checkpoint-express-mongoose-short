const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    author: String,

  title: string,
});

module.exports = mongoose.model("User", User);
