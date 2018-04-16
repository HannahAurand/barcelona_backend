const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const infoController = require('./controllers/info')

const app = express()

app.use(cors())
app.use(parser.json())
app.use('/public', express.static('./public'))
app.use('/', infoController)

app.set('port', process.env.port || 3000)

app.listen(app.get('port'), () => {
  console.log('Listening on port 3000!')
})
