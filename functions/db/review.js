const convertSnakeToCamel = require('../lib/convertSnakeToCamel');
const _ = require('lodash');

const getAllReviews = async (review) => {
  const { rows } = await review.query(`SELECT * FROM "review" r`);
  return convertSnakeToCamel.keysToCamel(rows);
};

const updateReviewLike = async (client, reviewId) => {
  const { rows: existingRows } = await client.query(
    `
      SELECT *
      FROM "review"
      WHERE id=$1
      `,
    [reviewId],
  );

  if (existingRows.length === 0) return false;

  const data = _.merge({}, convertSnakeToCamel.keysToCamel(existingRows[0]));

  const { rows } = await client.query(
    `
      UPDATE review
      SET like = $1, updated_at = now()
      WHERE id = $2
      RETURNING *
      `,
    [data.like + 1, reviewId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = {
  getAllReviews,
  updateReviewLike,
};
