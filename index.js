const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.redirect('/notes')
})

app.get('/notes', (req, res) => {
    res.render('index')
})

app.get('/notes/:someParameter', (req, res) => {
    let someNote = req.params.someParameter
    res.render('notes', {note: someNote})
})




app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
