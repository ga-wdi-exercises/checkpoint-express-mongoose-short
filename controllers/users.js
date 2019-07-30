const Users = require("../models");

module.exports = {
  index: function(req, res) {
    Users.find({}).then(users => res.json(users));
  },

  show: function(req, res) {
    User.findById(req.params.id).then(users => res.json(users));
  },

};