'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://admin:neOX3VedWiSNzuk1@gamescluster.cvd5b.mongodb.net/gamesdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) {
    return console.log(`Failed to connect to data base: ${err}`)
  }
  console.log('Connection to data base... OK')

  app.listen(port, () => {
    console.log(`GamesDB running in http://localhost:${port}`)
  })
})