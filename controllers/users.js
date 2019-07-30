const User = require('../models/User');

module.exports = {
    showUsers: function (req, res) {
        User.find({}).then(users => res.json(users));
    },
    getUserById: function (req, res) {
        User.findById({_id: req.params.id}).then(users => res.json(users));
    }
}