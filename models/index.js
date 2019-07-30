const mongoose = require('../db/connection');
const NoteSchema = require('./Note');
const UserSchema = require('./User');

module.exports = {
    User: mongoose.model('User', UserSchema),
    Note: mongoose.model('Note', NoteSchema)
};