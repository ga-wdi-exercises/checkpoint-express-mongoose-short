const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application.js')

router.get('/', (req, res) => {
  res.redirect('/user')
}

module.exports = router
