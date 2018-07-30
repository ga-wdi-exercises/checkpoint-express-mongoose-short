const express = require('express')
const router = express.Router()
const noteController = require('../controllers/NoteController.js')

router.get('/', noteController.index)
router.get('/new', noteController.new)
router.post('/', noteController.create)
router.get('/:id', noteController.show)
router.put('/:id', noteController.update)
router.destroy('/:id', noteController.destroy)

module.exports = router