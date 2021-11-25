const functions = require('firebase-functions');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const util = require('../../../lib/util');
const { bookDB } = require('../../../db');

module.exports = async (req, res) => {
  const { bookId } = req.params;

  if (!bookId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let client;

  try {
    client = await db.connect(req);

    const bookInfo = await bookDB.getBookById(client, bookId);

    if (!bookInfo) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_BOOK));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_BOOKINFO_SUCCESS, bookInfo));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
