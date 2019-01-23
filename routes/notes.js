const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note')

router.get('/', require('./notes'));
router.get('/notes', noteController.show)


module.exports = router;