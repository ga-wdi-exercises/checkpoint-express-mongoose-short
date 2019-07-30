const User = require('../models/User');

module.exports = {
    showUsers: function (req, res) {
        Note.find({users}).then(notes => res.json(notes));
    },
    getUserById: function (req, res) {
        Note.find({users: req.params.id}).then(notes => res.json(notes));
    }
}