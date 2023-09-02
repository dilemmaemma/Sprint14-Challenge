const db = require('../../data/dbConfig')

exports.validateTask = function (req, res, next) {
    const { task_description, project_id } = req.body
    if (
      task_description === undefined ||
      typeof task_description !== 'string' ||
      !task_description.trim()

      ) {
        next({ 
          status: 400,
          message: `invalid task_description`
        })
      } else if (
        project_id === undefined ||
        typeof project_id !== 'number' || isNaN(project_id)
      ) {
        next({ 
          status: 400,
          message: `invalid project_id`
        })
      } else {
        next()
      }
}

exports.checkProjectId = async function (req, res, next) {
    try {
      const existing = await db('projects')
        .where({project_id: req.params.project_id})
        .first()
      if (!existing) {
        next({ 
          status: 404, 
          message: `project with project_id ${req.params.project_id} not found`
        })
      } else next()
    } catch (err) {
      next(err)
    }
}