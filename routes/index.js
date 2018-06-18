const express = require('express')
const router = express.Router()
const notesController = require('../controllers/index')

router.route('/')
//   .get('/notes')

// router.route('/notes')
  .get(notesController.mainPage)

module.exports = router
