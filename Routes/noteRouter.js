const express = require('express');
const router = express.Router();
const controller = require('../controllers/notes.js');

router.get('/', controller.index);
router.get('/:id', controller.byId);
