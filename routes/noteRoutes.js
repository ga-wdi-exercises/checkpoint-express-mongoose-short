const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes')

router.get('/', noteController.redirect)
router.get('/notes', noteController.show)
router.get('/notes/:someParameter', noteController.showOne)


module.exports = router;