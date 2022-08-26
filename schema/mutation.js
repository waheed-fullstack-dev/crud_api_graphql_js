const { books } = require('../db')

const mutation = {
    addBook: async ({ title, author, description }, context) => {

        try {
            const book = await books.createBook({ title, author, description })
            return {
                data: book,
                status: true,
                message: 'Book added successfully'
            };
        } catch (error) {
            return {
                data: null,
                status: false,
                message: error.message
            };
        }
    },

    updateBook: async ({ id, title, author, description }, context) => {

        try {
            const book = await books.updateBook(id, { title, author, description })
            if (!book) {
                return {
                    data: null,
                    status: false,
                    message: 'Book not found'
                };
            }
            return {
                data: book,
                status: false,
                message: 'Book updated successfully'
            };
        } catch (error) {
            return {
                data: null,
                status: false,
                message: error.message
            };
        }
    },

    deleteBook: async ({ id }, context) => {
        try {
            const book = await books.deleteBook(id)
            if (!book) {
                return {
                    data: null,
                    status: false,
                    message: 'Book not found'
                };
            }
            return {
                data: book,
                status: true,
                message: 'Book deleted successfully'
            };
        }
        catch (error) {
            return {
                data: null,
                status: false,
                message: error.message
            };
        }
    }
};

module.exports = mutation