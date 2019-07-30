
const User = require("../../models");

module.exports ={
    index: function (req,res){
        User.find({}).then(Users => res.json(User))
    },
    show: function (req,res){
        User.findById(req.params.id).then(Users => res.json (User));
    }
};