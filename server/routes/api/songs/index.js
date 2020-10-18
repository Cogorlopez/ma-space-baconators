const router = require('express').Router()
const { BASE_FUNCTIONS_URL, FUNCTIONS: { GET_SONGS_LIST, GET_SONG } } = require('config')
const fetch = require('node-fetch')

/**
 * Proxy to Goolge Firebase to get all songs in db
 */
router.get('/', async (req, res) => {
  console.log('Getting songs...')
  const response = await fetch(`${BASE_FUNCTIONS_URL}${GET_SONGS_LIST}`)

  if (!response.ok) {
    throw new Error('Problem getting song list')
  }

  try {
    res.send(await response.json())
  } catch (err) {
    // console.log(err)
    res.status(500).send(err)
  }
})

/**
 * Proxy to Goolge Firebase to get a song by its id
 */
router.get('/:songId', async (req, res) => {
  console.log(JSON.stringify(req.params))
  try {
    const response = await fetch(`${BASE_FUNCTIONS_URL}${GET_SONG}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.params)
    })

    if (!response.ok) {
      throw new Error('Problem getting hello world')
    }

    res.send(await response.json())
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
