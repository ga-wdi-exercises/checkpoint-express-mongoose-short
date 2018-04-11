import { model } from 'mongoose';

const express = require('express')
const router = express.Router()
const Notes = require('../models/Note')

router.get('/', (req, res) => {
  Notes.find({}).then(notes => res.render('index', {notes}))
})

module.exports = router
