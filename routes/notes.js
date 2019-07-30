const express = require('express')
const router = express.Router()
const noteController = require('../controllers/notes')

// GET '/' which should redirect to `/notes'
router.get('/', noteController.redirect)

// GET '/notes' which return a list of notes
router.get('/notes', noteController.index)
// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id. NOTE You can name :someParameter whatever you want 😬
router.get('/notes/:id', noteController.show)

module.exports = router