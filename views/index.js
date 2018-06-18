const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(7000, () => {
    console.log('Reporting from port 7000')
})

module.exprorts = app