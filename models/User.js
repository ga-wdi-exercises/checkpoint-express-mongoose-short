// const mongoose = require('../db/connection')

// const userSchema = new mongoose.Schema({})

// module.exports = mongoose.model('User', userSchema)

const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  userame: String,
  email: String,
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes"
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
