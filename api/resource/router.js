const router = require('express').Router()
const Resource = require('./model')
const md = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
      } catch (err) {
        next(err)
      }
})

router.post('/', md.validateResource, (req, res, next) => {
    const resources = req.body

    Resource.add(resources)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something horrible went wrong with the Resource router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router