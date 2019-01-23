// const express = require ('express')
// // const router = express.Router()
// const app = express()


app.get('/', (req,res) {
    res.send('hello')
})

// app.get('/notes', function (req, res) {
// res.render('index')
// })

// app.get('/:someParameter', function (req, res) {
// res.send(`${req.params.someParameter}`)
// })

// app.listen(3000, () => {
//     console.log('app listening on port 3000')
// })