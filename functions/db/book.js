const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getBookById = async (client, bookId) => {
  const { rows } = await client.query(
    `
    SELECT *
    FROM "book"
    WHERE id = $1
    `,
    [bookId],
  );

  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getBookById };
