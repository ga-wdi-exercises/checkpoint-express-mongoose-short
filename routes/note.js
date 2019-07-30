const express = require('express')
const router = express.Router()
const noteController = require('../controllers/notes')

router.get('/', noteController.index)
router.get('/notes/', noteController.show)
router.get('/notes/:id', noteController.showNote)

module.exports = router