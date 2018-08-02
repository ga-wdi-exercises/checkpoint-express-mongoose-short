const express = require('express');
const router = express.Router();

router.use('/', require('./notes.js'));

router.all('*', (req, res) => {
    res.status(400).send();
});

module.exports = router;
