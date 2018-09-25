const Note = require('../models/Note')
 Note.find({}).remove(() => {
  Note.create({
    author: 'Mike Jones',
    title: 'the one and only',
    body: 'you cant clone me'
  })
})
