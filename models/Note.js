const mongoose = require('../db/connection')

//needs author, title, body
const Note = new mongoose.Schema({
	author: {
		type: String,
		index: true
	},
	title: {
		type: String
	},
	body: {
		type: String
	}
});

module.exports = mongoose.model('Note', Note)
