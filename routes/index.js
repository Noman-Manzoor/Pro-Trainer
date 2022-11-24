const router = require('express').Router();

router.use('/student', require('./students'));

module.exports = router;
