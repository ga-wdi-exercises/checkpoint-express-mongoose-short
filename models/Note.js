const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
    author: String,
    title: String
});

// app.get('/:id',(req,res)=> {
//     Note.findOne({ _id:req.params.id })
//     .then(note => {
//         res.render('note/show', notes);
//     })
//     .catch(err => console.log(err)
// )});

module.exports = mongoose.model('Note', Note)

//3. There will be a single model, `Note`, with three fields: an `author`, a `title` and a `body`. Each field expects a string value.