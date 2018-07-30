const mongoose = require('../db/connection')
const Note = new mongoose.Schema({})


const Note = new Schema({
      author: "String",
      title: "Stiring",
      body: "String"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})



// DO NOT REMOVE THIS LINE:
module.exports = app

module.exports = mongoose.model('Note', Note)
