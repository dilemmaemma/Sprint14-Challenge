const router = require('express').Router()
const Task = require('./model')
const { checkProjectId, validateTask } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll()
        res.json(tasks)
      } catch (err) {
        next(err)
      }
})

router.post('/', checkProjectId, validateTask, (req, res, next) => {
    let { task_description, task_notes, task_completed, project_id } = req.body

    if ( !task_completed ) task_completed = 0
    else if ( task_completed === true ) task_completed = 1

    Task.add({ task_description, task_notes, task_completed, project_id })
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Task router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router