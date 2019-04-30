const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/notes-checkpoint", {useNewUrlParser: true});

module.exports = mongoose;
