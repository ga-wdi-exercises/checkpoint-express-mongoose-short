const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note')

router.get('/new', noteController.new)
router.get('/', noteController.create)
router.get('/notes/:id', noteController.show)
router.get('/:id/edit', noteController.edit)
router.get('/:id', noteController.update)
router.get('/:idx', noteController.delete)

module.exports = router