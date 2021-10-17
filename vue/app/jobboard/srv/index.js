const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConfig = require('../config/mongodb.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true}).then(
  () => { console.log('Database connection is successful') },
  err => { console.log('Error when connecting to the database' + err) }
)
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/companies.routes')(app)
require('./routes/advertisement.routes')(app)
require('./routes/contractType.routes')(app)
require('./routes/user.routes')(app)
require('./routes/userHaveApply.routes')(app)

let srv = app.listen(8080, function () {
  let host = srv.address().address
  let port = srv.address().port

  console.log('Listening at http://%s:%s' + host, port)
})
