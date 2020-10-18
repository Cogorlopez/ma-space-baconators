const config = require('config')
const express = require('express')
const router = express.Router()

const renderClient = (req, res) =>
  res.type('html').send(`
   <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <!-- Display a message if JS has been disabled on the browser. -->
        <noscript>If you're seeing this message, that means
        <strong>JavaScript has been disabled on your browser</strong>, please
        <strong>enable JS</strong> to make this app work.</noscript>
      
        <div id="root" class="${config.APP_NAME}"></div>

        <!-- Webpack bundled files -->
        <script type="text/javascript" src="app.js"></script>

        <!-- Bootstrap CDN stuff -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </body>
    </html>
  `)

router.use(express.static('./dist'))
router.get('/*', renderClient)

module.exports = router
