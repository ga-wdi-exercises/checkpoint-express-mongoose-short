const mongoose = require('../db/connection')

const NoteSchema = new mongoose.Schema({
    title: String,
    body: String,
    favorited: [
        {
          ref: "author",
          type: mongoose.UserSchema.Types.ObjectId
        }
      ]
    

}),

const User = mongoose.model("Note", NoteSchema);

module.exports = mongoose.model('Note', noteSchema)


  