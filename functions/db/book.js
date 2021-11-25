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
      SELECT id as bookId,book_img,book_name,author FROM "book" 
      `
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {
  getBookById,
  getBestBooks
};