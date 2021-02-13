'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Game = require('./models/game')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/game', (req, res) => {
  Game.find({}, (err, games) => {
    if (err) return res.status(500).send({ message: `Error finding in data base: ${err}` })
    if (!games) return res.status(404).send({ message: 'There are no games' })
  
    res.status(200).send({ games })
  })
})

app.get('/api/game/:gameId', (req, res) => {
  let gameId = req.params.gameId

  Game.findById(gameId, (err, game) => {
    if (err) return res.status(500).send({ message: `Error finding in data base: ${err}` })
    if (!game) return res.status(404).send({ message: 'Game not found' })

    res.status(200).send({ game })
  })
})

app.post('/api/game', (req, res) => {
  console.log('POST /api/game')
  console.log(req.body)

  let game = new Game()
  game.title = req.body.title
  game.picture = req.body.picture
  game.players = req.body.players
  game.time = req.body.time
  game.age = req.body.age

  game.save((err, gameStored) => {
    if (err) res.status(500).send({ message: `Data base error: ${err}` })

    res.status(200).send({game: gameStored})
  })
})

mongoose.connect('mongodb+srv://admin:neOX3VedWiSNzuk1@gamescluster.cvd5b.mongodb.net/gamesdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) {
    return console.log(`Failed to connect to data base: ${err}`)
  }
  console.log('Connection to data base... OK')

  app.listen(port, () => {
    console.log(`GamesDB running in http://localhost:${port}`)
  })
})