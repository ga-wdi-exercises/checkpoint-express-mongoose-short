const mongoose = require("mongoose");
mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/notes-checkpoint";

mongoose.connect("mongodb://localhost/notes-checkpoint", {useNewUrlParser: true});


module.exports = mongoose;
