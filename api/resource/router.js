const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
      } catch (err) {
        next(err)
      }
})

router.post('/', (req, res, next) => {

})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Resource router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router