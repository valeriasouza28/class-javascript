const express = require('express')
const morgan = require('morgan')

// instancia servidor express
const app = express()

// para conseguir lidar com  padrões urlencoded
app.use(express.urlencoded({ extended: true }))
// para express lidar com dados no formato json
app.use(express.json())
// faz a requisição das rotas no arquivo routes
app.use(morgan('dev'))
app.use(require('./routes'))

// define a  porta que o servidor vai ouvir
app.listen(3000)
