const express = require('express')
const app = express()
const router = express.Router()

app.use('/', router)

app.get('/', (req, res) => {
  res.render('/notes')
})

app.get('/notes', (req, res) => {
  res.render('notes')
})

app.get('/notes/:someParameter', (req, someParameter) => {
  res.get('notes') 
})
