const express = require('express');
const usersRouter = express.Router();

const usersController = require('../controllers/users');

usersRouter.get('/', usersController.index);

module.exports = usersRouter;