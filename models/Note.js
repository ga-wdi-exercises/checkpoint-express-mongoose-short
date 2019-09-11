// const mongoose = require('../db/connection')

// const noteSchema = new mongoose.Schema({})

// module.exports = mongoose.model('Note', noteSchema)


const mongoose = require("../db/connection");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
});

const Users = mongoose.model("Users", noteSchema);

module.exports = Users;

