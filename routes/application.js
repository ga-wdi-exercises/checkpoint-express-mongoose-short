const express = ('express')
const router = express.Router()
const applicationController = require('../constrollers/application.js')

router.get('/', applicationController.index)

module.exports = router
