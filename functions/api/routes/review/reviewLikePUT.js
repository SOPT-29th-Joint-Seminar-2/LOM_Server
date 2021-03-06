const functions = require('firebase-functions');
const statusCode = require('../../../constants/statusCode');
const util = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { reviewDB } = require('../../../db');

module.exports = async (req, res) => {
  const { reviewId } = req.params;

  if (!reviewId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let client;

  try {
    client = await db.connect(req);

    const updateReview = await reviewDB.updateReviewLike(client, reviewId);
    if (!updateReview) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_REVIEW));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.UPDATE_REVIEW_LIKE_SUCCESS, { like: updateReview.likeCount }));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
