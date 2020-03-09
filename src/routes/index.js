const express = require('express')
const routes = express.Router()

const HomeController = require('../app/controllers/HomeController')

const products = require('./products')
const users = require('./users')

routes.get('/', HomeController.index)

routes.use('/products', products)
routes.use('/users', users)

// Alias
routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create")
})


module.exports = routes

// HTTP VERBS
// Get: Receber um resource(Apesar de as vezes ser utilizado para passar informações pelo get(string url)) - Resource(Uma entidade)
// Post: Criar ou Salvar um novo resource com dados enviados
// Put: Atualizar um Resource
// Delete: Deletar um resource