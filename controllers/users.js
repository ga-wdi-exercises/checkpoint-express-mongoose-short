const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    User.find({}).then(allnote => res.json(allnote));
  },
  getbyid: (req, res) => {
    User.findById({ _id: req.params.id }).then(user => res.json(user));
  }
};
