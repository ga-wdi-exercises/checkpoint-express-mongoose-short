const User = require("../models/Note");
const { Note } = require("../models/Note");

module.exports = {
    new: (req, res) => {
        res.render("note/new");