const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes");

mongoose.Promise = Promise;

module.exports = mongoose;
