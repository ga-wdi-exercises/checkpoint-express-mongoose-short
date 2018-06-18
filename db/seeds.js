const Board = require('../models/Board')

const data = require('./ seeds.json')

Board.remove({})
  .then(() => {
    return Board.collection.insert(data)
    })
  .then(() => {
    process.exit()
  })
