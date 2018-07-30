const { Note } = require('../models/Note')

module.exports = {
    show: (req, res) => {
        Note.findOne({ _id: req.params.id })
          .populate("author")
          .exec(function(err, note) {
            Note.populate(Note, { path: "author" }, function(
              err,
              Note
            ) {

              console.log(note);
              res.render("../show", note);
            });
          });
      },
      new: (req, res) => {
        res.render("note/new");
      },
    create: (req, res) => {
        Note.create({
            title: "An important note",
            author: "Winnie The Pooh",
            body: "Honey!"
        }).then(note => {
            req.body.note.push(note);
            req.body.save(err => {
                res.redirect(`index`)
            })
        })
    }
}