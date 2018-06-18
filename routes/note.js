const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.js')

router.get('/', noteController.index) // redirect to /notes
router.get('/notes', noteController.index)
router.get('/notes/:id', noteController.show)
