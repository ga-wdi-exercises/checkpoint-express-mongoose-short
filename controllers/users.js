const express = require ("express");
const mongoose = require ("../controllers/users.js");
const router = express.Router


module.exports = {
    index: (req, res) => {
        User.find({})
        .then(users => {
            res.json(users)
        })
    }
 };





