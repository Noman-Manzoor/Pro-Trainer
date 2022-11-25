const { createStudent, sendVerifyCode, verifyCode } = require('../controllers');
const router = require('express').Router();

router.post('/', createStudent);
router.post('/verify', sendVerifyCode);
router.post('/verify/code', verifyCode);

module.exports = router;
