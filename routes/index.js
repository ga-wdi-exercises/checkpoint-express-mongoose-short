const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.redirect)
router.get('/notes', indexController.index)
router.get('/notes/:id', indexController.show)

module.exports = router