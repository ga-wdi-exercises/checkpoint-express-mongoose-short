const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: "User" 
	},
	title: String,
	body: String
})

module.exports = mongoose.model('Note', Note)
