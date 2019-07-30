const express = require("express")
const router = express.Router();
const Users = require("../controllers/User");






router.get("/user",UserController.index)
router.get("/user/:id",UserController.show)



module.exports = router;