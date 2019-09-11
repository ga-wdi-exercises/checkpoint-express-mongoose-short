const User = require("../models/User");
module.exports = {
    index: (req,res) => {
        User.find({}).then(users => {
            res.json(users);
        })
    },
    show: (req,res) => {
        User.findOne({username: req.params.title}).then(user =>
            res.json(user));
    }
}