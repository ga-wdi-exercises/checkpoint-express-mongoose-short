const express = require('express')
const app = express()
const note = require('./models/note')


app.get('/', (req, res) => {
    res.json(note)
})

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
