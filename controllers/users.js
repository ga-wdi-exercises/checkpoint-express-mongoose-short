const User = require("../models/User")

module.exports = {
    index: function (req, res) {
        User.find({})
            .then(user =>
                res.json(user)
            )
    },
    show: function (req, res) {
        User.find({})
            .then(user =>
                res.json(user)
            )
    },
    showUser: function (req, res) {
        User.findById({ _id: req.params.id })
            .then(user =>
                res.json(user)
            )
    }
}