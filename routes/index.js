const express = require('express')
const router = express.Router()
const noteController = require('../controllers/index')

router.get('/', noteController.index)
router.get('/:id', noteController.show)


module.exports = router