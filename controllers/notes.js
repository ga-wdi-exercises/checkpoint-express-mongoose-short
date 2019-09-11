let Note
  let User
  let app

  before(done => {
    Note = require("../models/Note")
    User = require("../models/User")
    app = require("../index.js")

    Note.deleteMany({}).then(() => {
      User.deleteMany({}).then(() => {
        Note.create({
          title: "An important note",
          body: "Honey! Do the thing!"
        }).then(note => {
          User.create({
            username: "the_dude",
            email: "dude@thedude.com"
          }).then(user => {
            user.notes.push(note._id)
            note.author = user._id

            user.save()
            note.save()

            done()
          })
        })
      })
    })
  })

  after(done => {
    Note.deleteMany({}).then(() => {
      User.deleteMany({}).then(() => {
        done()
      })
    })
  })