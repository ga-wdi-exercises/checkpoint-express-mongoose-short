const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  notes: [
    {
      ref: "Note",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
