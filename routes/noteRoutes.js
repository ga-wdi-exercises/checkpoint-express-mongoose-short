express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.get('/', noteController.redirect)

router.get('/notes', noteController.list)

router.get('notes/:someParameter', noteController.find)