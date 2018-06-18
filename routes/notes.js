const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/index')
const notesController = require('../controllers/notes')



//GET '/' which should redirect to `/notes'
router.get('/', applicationController.index)

//GET '/notes' which render view with a list of notes
router.get('/notes', notesController.show)

//GET '/notes/:someParameter' where :someParameter can be used to identify or grab a single Note from the database.
router.get('/notes/:id', notesController.someNotes)

module.exports = router