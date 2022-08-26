const { config } = require('dotenv');

config();

module.exports = {
    port: process.env.PORT || 3000,
    graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
    dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017/crud_api_graphql',
}