const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/skyrim");

mongoose.Promise = Promise;

module.exports = mongoose;
