const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    notes: [
        {
            ref: 'Note',
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
