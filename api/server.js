const express = require('express')

const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

const server = express()

server.use(express.json())

server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Something went horribly wrong. Please relaunch the app and try again.'
    })
})

module.exports = server
