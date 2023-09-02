const router = require('express').Router()
const Project = require('./model')
const { validateProject } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
      } catch (err) {
        next(err)
      }
})

router.post('/', validateProject, (req, res, next) => {
    let { project_name, project_description, project_completed } = req.body

    if ( !project_completed ) project_completed = 0
    else if ( project_completed === true ) project_completed = 1

    Project.add({ project_name, project_description, project_completed })
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
      
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Project router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router