const express = require('express');
const router = express.Router();

router.use('/notes', require('./note'))
router.use('/', require('../controllers/application'))

module.exports = router;