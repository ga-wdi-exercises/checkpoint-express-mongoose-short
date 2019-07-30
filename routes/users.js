const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/users', userController.showUsers);
router.get('/users/:users', userController.getUserById);


module.exports = router;