const {
  createStudent,
  sendVerifyCode,
  verifyCode,
  getCategory,
  addCategory,
} = require('../controllers');
const router = require('express').Router();

router.post('/', createStudent);
router.post('/verify', sendVerifyCode);
router.post('/verify/code', verifyCode);
router.get('/category', getCategory);
router.post('/category', addCategory);

module.exports = router;
