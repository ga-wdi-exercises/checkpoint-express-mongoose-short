const User = require('../models/User')

module.exports = {
    index: (req,res) => {
        User.find({}).then(users => res.json(users))

    },
    show: (req,res) => {
        User.findById({_id: req.params.id}).then(users => res.json(users))
    }
}