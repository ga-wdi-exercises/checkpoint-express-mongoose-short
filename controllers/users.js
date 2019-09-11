const Users = require("../models/Users");

module.exports = {
    index: (req, res) => {
        Users.find({}).then(users => {
            res.json(users);
        });
    }
};


router.get("/", (req, res) => {
    res.send("Hi from user/ GET -> INDEX");
  });
  
  router.post("/", (req, res) => {
    res.send("Hi from user/ POST -> CREATE");
  });
  
  
//   router.get("/:id", (req, res) => {
//     console.log(req.params.id);
//     res.send(`Hi from user:id=${req.params.id} GET -> SHOW`);
//   });
  
//   router.put("/:id", (req, res) => {
//     res.send(`Hi from user:id=${req.params.id} PUT (UPDATE action)`);
//   });
  
//   router.delete("/:id", (req, res) => {
//     res.send(`Hi from user:id=${req.params.id} DELETE (DESTROY action)`);
//   });
  
  module.exports = router;