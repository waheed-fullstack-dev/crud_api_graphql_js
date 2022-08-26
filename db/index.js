const db = require('./connect');
const BookModel = require('./books');
const books = require('./dbUtils');

module.exports = {
    db,
    BookModel,
    books
};
