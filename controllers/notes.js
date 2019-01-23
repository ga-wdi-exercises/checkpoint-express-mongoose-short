router.get('/', (req, res) => {
    Note.find({})
      .then(notes=> {
        res.render('index', { todos });
      })
      .catch(err => console.log(err))
  });