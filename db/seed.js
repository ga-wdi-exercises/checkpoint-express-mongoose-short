const Note = require('../models/Note')
const User = require('../models/User')

User.deleteMany({}).then(User.create({
    username: "jerry",
    email: "something@yahoo.com",

}))

Note.deleteMany({}).then(Note.create({
    title: " chores",
    body: "clean",

}))