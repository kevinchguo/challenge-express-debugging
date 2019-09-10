const express = require('express');
const router = express.Router();

const get = require('./get');

router.get('/home', get);

module.exports = router;