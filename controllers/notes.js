const Note = require("../models/Note");

module.exports = {

  create: (req, res) => {
    res.redirect('/notes');
  }, 
  
  new: (req, res) => {

    res.render("index", { page: "notes new page" });
  },

  show: (req, res) => {
    res.render("show", { page: "notes show page" });
  }

    
  
  };