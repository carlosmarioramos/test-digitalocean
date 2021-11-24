const express = require('express')
const path = require('path')

// inicializations
const app = express()
require('dotenv').config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
})

// settings
app.set('port', process.env.PORT || 5000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// routes
app.get('/', (req, res) => {
  res.json({
    msg: process.env.MSG,
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT
  })
})

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})