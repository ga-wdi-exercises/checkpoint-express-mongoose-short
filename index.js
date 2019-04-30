const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use('/api/users', require('./controllers/users'))
app.use('/api/notes', require('./controllers/notes'))




app.listen(process.env.PORT || 3000, () => console.log('NEMO just keep swimming....on port 3000'))

// DO NOT REMOVE THIS LINE:
module.exports = app
