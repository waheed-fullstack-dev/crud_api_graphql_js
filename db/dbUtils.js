const BookModel = require('./books');

const getAllBooks = async (limit) => {
    return await BookModel.find({}).limit(limit);
}

const getBookById = async (id) => {
    return await BookModel.findById(id);
}

const createBook = async ({ title, description, author }) => {
    return await BookModel.create({ title, description, author });
}

const updateBook = async (id, { title, description, author }) => {
    const set = {};
    if (title) set.title = title;
    if (description) set.description = description;
    if (author) set.author = author;
    return await BookModel.findByIdAndUpdate(id, set);
}

const deleteBook = async (id) => {
    return await BookModel.findByIdAndDelete(id);
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}