const router = require('express').Router()

router.use('/helloworld', require('./helloWorld'))
router.use('/songs', require('./songs'))

module.exports = router
