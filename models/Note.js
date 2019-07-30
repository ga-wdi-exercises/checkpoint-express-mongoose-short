const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({})




const noteSchema = new Schema ({
    title: String,
    body: String,
    author: {UserSchema}

})


module.exports = mongoose.model('Note', noteSchema)
