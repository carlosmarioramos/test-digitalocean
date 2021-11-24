const express = require('express')
const path = require('path')

// inicializations
const app = express()
require('dotenv').config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
})

// settings
app.set('port', process.env.PORT)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// routes
app.get('/', (req, res) => {
  res.json({
    message: `Estoy en modo ${process.env.ENV}`,
    env: process.env.NODE_ENV
  })
})


app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})