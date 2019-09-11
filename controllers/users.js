const User = require('../models/User');

module.exports = {
    index: (req, res) => {
        User.find({}).then(output => res.json(output))
    },
    search: (req, res) => {
        User.findOne({ _id: req.params.id }).then(output => res.json(output))
    },
}