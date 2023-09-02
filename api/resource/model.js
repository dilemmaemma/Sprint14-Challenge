// build your `Resource` model here
const db = require('../../data/dbConfig')

exports.getAll = function () {
    return db('resources')
}
