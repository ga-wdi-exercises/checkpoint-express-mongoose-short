const Note = require("../../models/Note");
const User = require("../../models/User");

module.exports = {
  redirect: function(req, res) {
    res.redirect("");
  },
  noteIndex: function(req, res) {
    Note.find({})
        .then(note => res.json(note));
  },
  showNote: function(req, res) {
    Note.findById(req.params.id)
        .then(note => res.json(note));
  },
  userIndex: function(req, res) {
    User.find({})
        .then(user => res.json(user));
  },
  showUser: function(req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user));
  }
};
