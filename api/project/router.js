const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
      } catch (err) {
        next(err)
      }
})

router.post('/', (req, res, next) => {

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Project router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router