const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notes"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;