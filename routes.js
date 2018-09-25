const router = require('express').Router();

router.get('/', noteController.index);

module.exports = router;