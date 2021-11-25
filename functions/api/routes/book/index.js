const express = require('express');
const router = express.Router();

router.get('/:bookId', require('./bookGET'));

module.exports = router;
