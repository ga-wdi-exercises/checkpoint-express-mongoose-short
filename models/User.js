const mongoose = require("../db/connection");

const Schema = new mongoose.Schema({});

const User = new Schema({
  username: String,
  email: String,
  notes: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

module.exports = mongoose.model("User", User);
