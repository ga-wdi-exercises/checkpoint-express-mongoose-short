const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      requried: true,
      ref: "Note"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
