'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = Schema({
  title: String,
  picture: String,
  players: String,
  time: String,
  age: String,
})

module.exports = mongoose.model('Game', GameSchema)
