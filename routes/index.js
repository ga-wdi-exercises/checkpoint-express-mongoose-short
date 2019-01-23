const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js');

router.get('/', applicationController.index);
router.get('/notes', applicationController.show)
router.get('notes/:id', applicationController.show)

module.exports = router;
