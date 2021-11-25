const express = require('express');
const router = express.Router();

router.put('/:reviewId', require('./reviewLikePUT'));

module.exports = router;
