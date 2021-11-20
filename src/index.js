const express = require('express')
const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
})

// inicializations
const app = express()

// routes
const apiRoutes = require('./routes/api.routes')

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use(apiRoutes)

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})