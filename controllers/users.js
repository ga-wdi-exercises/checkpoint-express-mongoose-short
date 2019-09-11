const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    User.find({}).then(users => {
      res.json(users);
    });
  },
  show: (req, res) => {
    User.findOne({
      id: req.params.id
    }).then(user => {
      res.json(user);
    })
  }
};