const config = require('config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.text())

if (config.DEV_SERVER) {
  app.use(require('./middleware/dev'))
}

app.use(require('./routes'))

module.exports = app
