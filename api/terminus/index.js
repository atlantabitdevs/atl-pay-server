const express = require('express');
const router = express();

const { signup } = require('./terminusController');

router.post('/signup', signup);

module.exports = router;
