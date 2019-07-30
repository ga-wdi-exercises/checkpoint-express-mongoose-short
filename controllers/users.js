
const { Note, User } = require("../models");
//if needed
// const queryOptions = require("../utils/queryOptions");

module.exports = {
  index: function(req, res) {
    res.send("hello world");
  },
  show: function(req, res) {
    res.send("hello world");
  }
};
