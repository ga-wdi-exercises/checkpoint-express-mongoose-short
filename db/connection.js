const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes-checkpoint", {useNewUrlParser: true})
.catch(err => {
    console.error(err)
})

mongoose.Promise = Promise;

module.exports = mongoose;
