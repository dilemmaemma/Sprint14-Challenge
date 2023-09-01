// build your `Task` model here
const db = require('../../data/dbConfig')

exports.getAll = function () {
    return db('task')
}