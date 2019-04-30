const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title:String,
    body:String,
    // User:
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref:"author"
    //     }
})

module.exports = mongoose.model('Note', noteSchema)
