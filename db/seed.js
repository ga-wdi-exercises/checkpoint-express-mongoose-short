const mongoose = require('./connection')
const User = require("../models/User")
const Note = require("../models/Note.js")
const info = require("./seedData.json")

User.deleteMany({}).then(() => {
    User.create(info).then(infoDone => {
        console.log(infoDone)
    })
})