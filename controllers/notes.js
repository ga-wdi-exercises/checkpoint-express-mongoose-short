const router = require('express');

router.get('/', (req, res) => {
    notes.find({})
        .then(notes =>{
            res.render('index', { notes });
        })
        .catch(err => console.log(err))
    });