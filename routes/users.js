const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

// GET '/users' which will return a list of all users
router.get('/', userController.index)
// GET '/users/:someParameter which will return a single user by id. NOTE see previous note.

router.get('/:id', userController.show)

module.exports = router