const express = require("express")
const router = express.Router()

router.use("/", require("./redirect"))
router.use("/notes", require("./notes"))
router.use("/users", require("./users"))

module.exports = router;