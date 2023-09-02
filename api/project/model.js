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

async function getById (project_id) {
    const rows = await db
        .select('project_name', 'project_description', 'project_completed')
        .from('projects as t')
        .where('project_id', project_id)
    
    return {
        project_completed: rows[0].project_completed === 1 ? true : false,
        project_name: rows[0].project_name,
        project_description: rows[0].project_description,
    }
}

exports.add = function (project) { 
    return db('projects').insert(project)
    .then(([project_id]) => {
      return getById(project_id)
    })
}