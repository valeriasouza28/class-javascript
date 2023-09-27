const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

module.exports = routes

// define rota
routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
  return res.json({ hello: 'Rocket' })
})
