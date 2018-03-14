const mongoose = require("../db/connection");

const Noteschema = new mongoose.Schema({
	title: string,
	authour: string,
	body: string
  });

const Note = mongoose.model("Note", Note);

module.exports = Note;
