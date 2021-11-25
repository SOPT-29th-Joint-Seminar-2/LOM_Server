const express = require('express');
const router = express.Router();

router.get('/:bookId', require('./bookGET'));
router.get('/', require('./bookBestListGET'));

module.exports = router;