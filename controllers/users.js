const User = require('../models/User')

module.exports = {
    index: (req, res) => {
        User.find({}).then(r => res.json(r)).catch(e=>console.log(e))
    },
    show: (req, res) => {
        User.findById({ _id: req.params.id }).then(note => res.json(note)).catch(e=>console.log(e))
    }
}