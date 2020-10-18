const router = require('express').Router()
const { BASE_FUNCTIONS_URL, FUNCTIONS: { HELLO_WORLD } } = require('config')
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
  console.log(`${BASE_FUNCTIONS_URL}${HELLO_WORLD}`)
  const response = await fetch(`${BASE_FUNCTIONS_URL}${HELLO_WORLD}`)

  if (!response.ok) {
    throw new Error('Problem getting hello world')
  }

  try {
    res.send(await response.body.text())
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
