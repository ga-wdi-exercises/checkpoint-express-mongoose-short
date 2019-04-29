const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes-checkpoint", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports = mongoose;
