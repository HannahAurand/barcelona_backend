const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const infoController = require('./controllers/info')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.use(cors())
app.use(parser.json())
app.use('/public', express.static('./public'))
app.use('/', infoController)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log('Listening on port 3000!')
})
