const note = require('../models/note')
const db = require('../connection.js')

module.exports = {

    redirect: (req,res) => {
        req.redirect('/notes')
    },

    list: (req,res) => { 
        db.find().then( (list => res.render(list)))
    }, 

    find: (req,res) => {
        db.find(req.someParameter).then ( array => res.render(array))
    }

}