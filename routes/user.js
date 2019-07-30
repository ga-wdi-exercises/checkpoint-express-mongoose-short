const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/', userController.index)
router.get('/users', userController.show)
router.get('/users/:id', userController.showUser)

module.exports = router