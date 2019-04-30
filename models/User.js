const mongoose = require('../db/connection');
const Note = require('./Note.js');

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	notes: [ String ]
});

module.exports = mongoose.model('User', userSchema);
