const Note = require("../models/Note");

module.exports = {

    index: function(req, res) {
      res.redirect('/notes');
    }
    
  
  };