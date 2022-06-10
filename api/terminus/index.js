const express = require('express');
const router = express();

const { signup, paid } = require('./terminusController');

router.post('/signup', signup);
router.post('/paid', paid);

module.exports = router;
