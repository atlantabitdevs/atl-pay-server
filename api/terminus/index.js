const express = require('express');
const router = express();

const { signUp } = require('./terminusController');

router.post('/signup', signUp);

module.exports = router;
