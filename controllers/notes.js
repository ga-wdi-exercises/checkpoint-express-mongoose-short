const Note = require('../models/Note.js');

module.exports = {
	index: (req, res) => {
		Note.find({}).then((notes) => {
			res.json(notes);
		});
	},
	byId: (req, res) => {
		Note.find({ _id: req.params.id }).then((note) => {
			res.json(note);
		});
	}
};
