const mongoose = require('./connection')
const Message = mongoose.model('Message')
const seedData = require('./seeds.json')

Message.remove({})
  .then(() => {
    return Message.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })