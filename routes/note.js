const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note')

router.get('/', noteController.new)
router.get('/notes', noteController.show)
router.get('/notes/:id', noteController.show)

module.exports = router