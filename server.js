const express = require('express')
const app = express()
const port = 4000

app.get('/authors/:_id', (req, res) => {
  res.send(404, 'an author')
})

app.get('/authors', (req, res) => {
  console.log('creating')
})

// def destroy
//   @author = Author.find(params[:id])
//   @author.destroy
//
//   redirect_to "/authors"
// end

app.get('/findAuthorByName/:name', (req, res) => {
  var author = Author.find({name: req.params.name})
  res.send(author)
})

app.start(port, () => {
  console.log(`Listening on port ${port}`)
})
