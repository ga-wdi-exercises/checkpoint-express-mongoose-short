const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})




app.listen(3000, () => console.log('app is running here: http://localhost:3000!'))

// DO NOT REMOVE THIS LINE:
module.exports = app
