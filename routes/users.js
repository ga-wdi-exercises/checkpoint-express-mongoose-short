const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/users', noteController.showUsers);
router.get('/users/:users', noteController.getByUserId);