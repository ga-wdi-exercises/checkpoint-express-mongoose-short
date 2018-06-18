const express = require('express')
const router = express.Router()

router.use('/', require('./note'))
router.use('/notes', require('./note'))

router.all('*', (req, res) => {
  res.status(400).send()
})

module.exports = router
