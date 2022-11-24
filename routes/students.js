const { createStudent } = require('../controllers');
const router = require('express').Router();

router.post('/', createStudent);

module.exports = router;
