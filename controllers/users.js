const User = require("../models/User")

module.exports = {
    index: function(req, res) {
        User.find({}).then(users => res.json(users));
    },
    show: function(req, res) {
        User.findById(req.params.id).then(user => res.json(user));
    }
}