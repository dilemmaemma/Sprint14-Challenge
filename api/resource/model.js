// build your `Resource` model here
const db = require('../../data/dbConfig')

exports.getAll = function () {
    return db('resources')
}
exports.add = function (resource) { 
    return db('resources').insert(resource)
    .then(([resource_id]) => {
      return db('resources').where('resource_id', resource_id).first()
    })
}