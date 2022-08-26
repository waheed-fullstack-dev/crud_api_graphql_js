const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, resolver } = require('./schema');
const envs = require('./envs');

const { db } = require('./db');

const app = express();
app.use(express.json());

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
});

app.use(
    envs.graphqlPath,
    graphqlHTTP((request, response, graphQLParams) => ({
        schema,
        rootValue: resolver,
        graphiql: true,
        context: {
            request,
            response,
        },
    }))
);

app.get('/', (req, res, nex) => {
    res.send("Hello World")
})

app.listen(envs.port, () => {
    console.log(`Server is running at http://localhost:${envs.port}${envs.graphqlPath}`);
});