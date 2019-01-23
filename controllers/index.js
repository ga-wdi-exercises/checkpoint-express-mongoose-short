const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = {
    home: (req, res) => {
        Note.find({}).then((results) => {
            console.log(results)
        })
        res.send('hello from /home')
    }
}