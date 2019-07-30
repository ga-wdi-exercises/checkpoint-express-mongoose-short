const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())


app.use('/', require('./routes/user'))
app.use('/', require('./routes/note'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
