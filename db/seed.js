Quest.remove({})
  .then(() => {
    return Quest.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
