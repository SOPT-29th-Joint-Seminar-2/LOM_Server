const convertSnakeToCamel = require('../lib/convertSnakeToCamel')

const getAllReviews = async (review) => {
    const {
        rows
    } = await review.query(`SELECT * FROM "review" r`);
    return convertSnakeToCamel.keysToCamel(rows);
}

module.exports = {
    getAllReviews
}