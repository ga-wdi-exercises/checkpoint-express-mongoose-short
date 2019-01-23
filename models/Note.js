const mongoose = require('../db/connection')
const Schema = mongoose.Schema

beforeEach(done => {
    Note.remove({}).then((result) => {
        done(result)
      })
})

const Note = new Schema({
    // author, title, body
    auther: String,
    title: String,
    body: [String]
})

afterEach(done => {
    Note.remove({}).then(() => {
      done()
    })
})

module.exports = mongoose.model('Note', Note)