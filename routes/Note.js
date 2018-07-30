const express = require = require('express')
const router = express.Router()
const noteController = require('../controllers/Note.js')

router.get('/', noteController.redirect)
router.get('/notes', noteController.index)
router.get('/notes/:id', noteController.show)

module.exports = router