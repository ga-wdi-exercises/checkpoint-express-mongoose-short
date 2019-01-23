const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const noteController = require('../controllers/note')

router.get('/note', applicationController.index)
// router.use('/note', require('./note'))
router.get('/:id', noteController.show)

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router