const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');

router.get('/', noteController.index)
router.get('/note/', noteController.index)
router.get('/note/:someParameter', noteController.show)


module.exports = router;