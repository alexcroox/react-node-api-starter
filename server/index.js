const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const query = require('./functions/query')

// Add logging of each request
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json({ strict: false }))

app.get('/query/:query', query)

module.exports.handler = serverless(app)
