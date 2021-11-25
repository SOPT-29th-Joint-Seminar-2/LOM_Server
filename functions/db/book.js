const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getBookById = async (client, bookId) => {
  const {
    rows
  } = await client.query(
    `
    SELECT *
    FROM "book"
    WHERE id = $1
    `,
    [bookId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};
const getBestBooks = async (client) => {
  const {
    rows
  } = await client.query(
    `
      SELECT id as book_id,book_img,book_name,author FROM "book" ORDER BY id ASC;
      `
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {
  getBookById,
  getBestBooks
};