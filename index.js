const { SERVER } = require('config')
const { HTTP_PORT } = SERVER

const app = require('./server/app')

const port = process.env.PORT || HTTP_PORT

app.listen(port)

console.log('app is listening on port: ' + port)
