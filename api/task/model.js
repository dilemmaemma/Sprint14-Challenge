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

async function getById (task_id) {
    const rows = await db
        .select('task_description', 'task_notes', 'task_completed')
        .from('tasks as t')
        .where('task_id', task_id)
    
    return {
        task_completed: rows[0].task_completed === 1 ? true : false,
        task_description: rows[0].task_description,
        task_notes: rows[0].task_notes,
    }
}

exports.add = function (task) { 
    return db('tasks').insert(task)
    .then(([task_id]) => {
      return getById(task_id)
    })
}