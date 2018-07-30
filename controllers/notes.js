const Note = require("../models/Note");
const express = require('express');
// const r = express.Router()


module.exports = {
  index: (req, res) => {
      Note.find({}).then( notes  => {
        res.status(200)
        res.render('index', { notes })
        // res.send(notes)
      }).catch(err => {
        console.log('err : ' + err)
      })
  },
  show: (req, res) => {

    Note.findOne({ _id : req.params.id })
    .then( note  => {
      res.status(200)
      res.render('show', { note })
    })
    .catch(err => { console.log('err : ' + err)});
  }
}


//
// r.get("/3", (req, res) => {
//   res.send("hello")
// })
//
//
//   r.get('/', (req, res) => {
//     // console.log('req : ' + req)
//     // Note.find({})
//     // .then(notes => {
//       // res.render('./views/index')
//       res.send('test')
//     // })
//   })
//
//   r.get("/new", (req, res) => {
//     res.render("todos/new");
//   });
//
//
//
//
//   // r.get('/note_id', (req, res) => {
//   //   // console.log('req : ' + req.params.note_id)
//   //
//   //   res.send(req.params.note_id)
//   // })
//
//   r.get("/:id", (req, res) => {
//   // Todo.findOne({ _id: req.params.id })
//   //   .then(todo => {
//   //     res.render("todos/show", todo);
//   //   })
//   //   .catch(err => console.log(err));
//   res.send('show')
//
// });
//
//
// module.exports = r
