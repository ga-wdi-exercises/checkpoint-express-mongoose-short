const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js');

router.get('/', controller.index);
router.get('/:id', controller.byId);
