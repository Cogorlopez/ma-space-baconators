const { BASE_PATH } = require('config')
const express = require('express')
const router = express.Router()

router.use('/api', require('./api'))
router.use(BASE_PATH, require('./client'))

router.use((req, res) => {
  console.error('Uncaught Error', req)
  res.status(404).send('route not found')
})

module.exports = router
