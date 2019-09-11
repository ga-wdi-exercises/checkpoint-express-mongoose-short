const User = require("../models/User");

// basic export index the model
module.exports = {
  showUsers: (req, res) => {
    User.find({}).then(users => {
      res.json(users);
    });
  },
  userName: (req, res) => {
    User.findOne({ author: req.params.username }).then(notes =>
      res.json(notes))
  }
};