const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll()
        res.json(tasks)
      } catch (err) {
        next(err)
      }
})

router.post('/', (req, res, next) => {

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Task router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router