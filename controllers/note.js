const { Note } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("note/new");
  
//...