const Note = require("../models/Note");

Note.remove({}).then(() => {
  Promise.all([
    Note.create({
      title: "React",
      author: "Facebook",
      body: "Its rly hard"
    }),
    Note.create({
      title: "Redux",
      author: "idk",
      body: "Perry says this will be reallyyy hard"
    })
  ]).then(() => {
    console.log("rdy");
    process.exit();
  });
});
