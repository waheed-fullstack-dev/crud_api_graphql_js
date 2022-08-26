const mongoose = require('mongoose')
const envs = require('../envs')

mongoose.connect(envs.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection