const User = require('../models/User.js');

module.exports = {
	index: (req, res) => {
		User.find({}).then((users) => {
			res.json(users);
		});
	},
	byId: (req, res) => {
		User.find({ _id: req.params.id }).then((user) => {
			res.json(user);
		});
	}
};
