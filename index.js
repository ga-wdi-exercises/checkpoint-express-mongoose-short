const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
