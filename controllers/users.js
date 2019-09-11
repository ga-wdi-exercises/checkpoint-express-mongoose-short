const Users = require("../models/User")

module.exports = {
    index: (req, res) => {
        Users.find({}).then(user => {
            res.json(user)
        })
    },
    byId: (req, res) => {
        Users.findById(req.params.id)
        .then(item => res.json(item))
    }
}