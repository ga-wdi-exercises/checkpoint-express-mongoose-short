const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    favorited: [
        {
          ref: "notes",
          type: mongoose.NoteSchema.Types.ObjectId
        }
      ]
    

}),

const User = mongoose.model("User", UserSchema);

module.exports = mongoose.model('User', userSchema)
