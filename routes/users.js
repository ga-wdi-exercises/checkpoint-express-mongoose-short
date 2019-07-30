const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.showUsers);
router.get('/:id', userController.getUserById);


module.exports = router;