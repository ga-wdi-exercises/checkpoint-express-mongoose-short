const express = require("express");
const router = express.Router();

outer
  .route("/")
  .get((req, res) => {
    res.json(candies);
  })
  .post((req, res) => {
    notes.push(req.body);
    res.json(req.body);
  });

router.route("/:id").get((req, res) => {
  let note = notes.find(element => element.id === parseInt(req.params.id));
  res.json(candy);
});

router.put("/:id/edit", (req, res) => {
  candies.find((note, i) => {
    if (note.id === parseInt(req.params.id)) {
      notes[i] = req.body;
      res.format({ json: () => res.json(req.body) });
    }
  });
});

module.exports = router;
