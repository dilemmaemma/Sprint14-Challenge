// build your `Task` model here
const db = require('../../data/dbConfig')

exports.getAll = async function () {
    const result = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select([
            'task_id',
            'task_description',
            'task_notes',
            'task_completed',
            'project_name',
            'project_description',
            'project_completed'
        ])
        .then((rows) => {
            const modifiedRows = rows.map(row => ({
                ...row,
                task_completed: row.task_completed === 1 ? true : false,
                project_completed: row.project_completed === 1 ? true : false
            }))
            return modifiedRows
        })
    
    return result
}