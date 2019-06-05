const express = require('express');
const User = require('../models/User.js');

const router = express.Router();

router.get('/', (req, res) => {
    User.find({}).then(allUsers => res.json(allUsers));
});

router.get('/users/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).then(oneUser => oneUser);
});

module.exports = router;
