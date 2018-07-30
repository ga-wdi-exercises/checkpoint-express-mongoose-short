const express = ('express')
const router = express.Router()
const noteController = require('../constrollers/note.js')

router.get('/notes', noteController.index)
router.get('/:id', noteController.show)

module.exports = router
