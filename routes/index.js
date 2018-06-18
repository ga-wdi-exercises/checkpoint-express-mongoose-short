const express = require('express');
const router = express.Router();


router.use('/', require('./application.js'))
router.use('/note', require('./note'))
router.use('/note/:someParameter', require('./note'))


module.exports = router;