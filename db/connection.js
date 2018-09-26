const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/notes",  { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
