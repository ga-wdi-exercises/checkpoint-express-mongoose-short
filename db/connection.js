const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messageboard");

mongoose.Promise = Promise;

module.exports = mongoose;
