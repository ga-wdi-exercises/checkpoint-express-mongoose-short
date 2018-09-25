const Note = require("../models/Note");

module.exports = {
    index: (req, res) => {
        res.redirect('/notes');
    }
}