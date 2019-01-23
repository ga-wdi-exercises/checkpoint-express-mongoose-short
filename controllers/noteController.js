const Note = require('../models/note')
const db = require('../connection.js')

module.exports = {

    redirect: (req,res) => {
        req.redirect('/notes')
    },

    list: (req,res) => { 
        db.find(Note).then( (list => res.render('../views/index', list)))
    }, 

    find: (req,res) => {
        db.find(Note.someParameter).then ( note => res.render('../views/show', note))
    }

}