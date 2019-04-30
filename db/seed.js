const mongoose = require('./connection')
const users = require('./users.json')
const notes = require('./notes.json')

const usersModel = require('../models/User')
const notesModel = require('../models/Note')

usersModel.deleteMany({}).then(() => {
    usersModel.create(users).then((ph) => {
        console.log(ph)
    })
})

notesModel.deleteMany({}).then(() => {
    notesModel.create(notes).then((ph) => {
        console.log(ph)
    })
})