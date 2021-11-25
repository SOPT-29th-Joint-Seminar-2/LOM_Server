const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllReviews = async (review) => {
  const { rows } = await review.query(`SELECT * FROM "review" r`);
  return convertSnakeToCamel.keysToCamel(rows);
};

const updateReviewLike = async (client, reviewId) => {
  const { rows } = await client.query(
    `
      UPDATE review
      SET like_count = like_count + 1, updated_at = now()
      WHERE id = $1
      RETURNING *
      `,
    [reviewId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = {
  getAllReviews,
  updateReviewLike,
};
