const Notes = require("../models/Note");
module.exports = {
  index: function(req, res) {
    res.render("/notes");
  },
  show: function(req, res) {
    res.render("/notes/show");
  }
};
