const express = require('express');
const router = express.Router();

router.put('/:reviewId', require('./reviewLikePUT'));
router.post('/', require('./reviewPOST'));

module.exports = router;