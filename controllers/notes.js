const { Note } = require("../models/Note");

module.exports = {
  show: (req, res) => {
    Note.findOne({ _id: req.params.id })
      .populate("author")
      .then(note => {
        Note.populate(note.body, { path: "author" }).then(body => {
          note.body = body;
          res.render("index", note);
        });
      })
  },
  create: (req, res) => {
    Note.create({
      content: req.body.note.title,
      author: req.body.author
    }).then(note => {
      User.findOne({ _id: req.body.author }).then(user => {
        user.note.push(note);
        user.save(err => {
          res.redirect(`/note/${note._id}`);
        });
      });
    });
  },
  showOne: (req, res) => {
    let { body, author } = req.body;
    Note.findOne({ _id: req.params.id }).then(note => {
      note.title.push({
        body,
        author
      });
      note.save(err => {
        res.redirect(`/note/${note._id}`);
      });
    });
  }
};
