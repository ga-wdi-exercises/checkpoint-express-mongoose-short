const mongoose = require('../db/connection');
const User = require('./User.js');

const noteSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String
});

module.exports = mongoose.model('Note', noteSchema);
