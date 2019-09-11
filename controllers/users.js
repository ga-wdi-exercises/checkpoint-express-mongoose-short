const User = require("../models/User")

module.exports = {
    index:(req,res) => {
        //placeholder

        User.find({}).then(user => {
            res.json(user);

        })
    },

    show:(req, res) => {
            User.findOne({id: req.params.id})
            .then(user => res.json(user))
        
    }
}