const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  notes: [{ type: Schema.Types.ObjectId, ref: "Note" }]
});

module.exports = mongoose.model("User", userSchema);
