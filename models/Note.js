const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title:String,
    body:String,
    User:[
        {   type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    ]
})

module.exports = mongoose.model('Note', noteSchema)
