const express = require('express');
const router = express.Router();

router.get('/', require('./application.js'));
router.get('/note:id', require('./user'));
router.get('/note', require('./note'));



module.exports = router;