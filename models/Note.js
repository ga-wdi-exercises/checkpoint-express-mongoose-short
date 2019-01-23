const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: "User" 
	},
	title: String,
	body: String
})

module.exports = mongoose.model('Note', Note)
