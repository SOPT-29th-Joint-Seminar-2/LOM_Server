const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllReviews = async (client) => {
  const { rows } = await client.query(`SELECT * FROM "review" r ORDER BY id ASC`);
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
const addReview = async (client, content) => {
  const { rows } = await client.query(
    `
    INSERT INTO review
    (nickname,contents,user_img)
    VALUES
    ($1,$2,$3)
    RETURNING id
    `,
    ['김덕배', content, 'https://firebasestorage.googleapis.com/v0/b/library-of-millie.appspot.com/o/img_user.png?alt=media&token=17b805a1-bba1-4194-b4f1-cf8aa11285f2'],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = {
  getAllReviews,
  updateReviewLike,
  addReview,
};
