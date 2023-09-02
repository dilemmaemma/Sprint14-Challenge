// build your `Project` model here
const db = require('../../data/dbConfig')

exports.getAll = async function () {
        const result = await db('projects')
        .select([
            'project_id',
            'project_name',
            'project_description',
            'project_completed'
        ])
        .then((rows) => {
            const modifiedRows = rows.map(row => ({
                ...row,
                project_completed: row.project_completed === 1 ? true : false
            }))
            return modifiedRows
        })
    
    return result
}
