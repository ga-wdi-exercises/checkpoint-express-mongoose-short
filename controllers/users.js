const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/users', (req,res) => {
    User.find({})
    .then(allUsers => {
        res.json(allUsers);
    });
});

router.get('/users/:id', (req,res) => {
    User.findOne(req.body._id)
    .then(oneUser => {
        res.json(oneUser);
    });
});



module.exports = router;
