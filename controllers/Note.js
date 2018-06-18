/* GET '/'
GET '/notes'
GET '/notes/:someParameter'
 */

router.get('/', (req, res) => {
    Note.find({})
      .then(notes => {
        res.render('index', { notes });
      })
      .catch(err => console.log(err))
  });
  app.get('/notes', (req, res) => {
    Note.findOne({})
      .then(note => {
        res.render('notes/show', note);
      })
      .catch(err => console.log(err))
  });
  app.get('/:author', (req, res) => {
    Note.findOne({ _author: req.params.author })
      .then(note => {
        res.render('notess/:author', note);
      })
      .catch(err => console.log(err))
  });