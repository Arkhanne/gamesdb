'use strict'

const express = require('express')

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`GamesDB running in http://localhost:${port}`)
})