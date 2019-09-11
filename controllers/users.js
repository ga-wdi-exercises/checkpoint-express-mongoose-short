const Users = require("../models/User")
module.exports = {
    index:(req,res) =>{
        Users.find({}).then(user =>{
            res.json(user);
        });
    },
    usersId:(req,res) =>{
        Users.findOne({id: req.params.id}).then(user => res.json(user));
    },
}