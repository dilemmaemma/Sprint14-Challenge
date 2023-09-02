// build your `Project` model here
const db = require('../../data/dbConfig')

exports.getAll = function () {
    return db('projects')
}
