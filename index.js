const express = require('express')
const app = express()



app.use('/', require('./routes/notes'))
app.use('/notes', require('./routes/notes'))
app.use('/users', require('./routes/users'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
