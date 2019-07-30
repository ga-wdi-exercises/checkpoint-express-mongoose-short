const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  body: {
    type: String
  }
});

module.exports = mongoose.model("Note", noteSchema);
