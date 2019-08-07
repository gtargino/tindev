// somente refatorando e otimizando, tudo isso poderia ficar em server.js

const express = require('express');
const routes = express.Router();

// GET da requisicao, parametro '/' para viabilizar acesso direto a raiz do endereco, mas poderia ser '/users', '/forum', etc
// segundo parametro com funcao que gerencia os objetos de request/response do server

routes.get('/', function(req,res) {
    req.query.name;
    //return res.send(`Hello fking world! ${req.query.name}`) // aprendi desse jeito, mas tentei o de baixo e funcionou
    //res.send('Hello fking world!' + req.query.name) // esse ta mais simplificado e aparentemente o return nao e obrigatorio
    res.json({ message:`Hello fking world!!! ${req.query.name}` }) // por convencao, melhor retornar como um objeto json, detalhe
});

routes.post('/dev', function(req,res) {
    res.json({ status: true })
});

// expondo variavel de rotas para que o server.js possa enxergar
module.exports = routes;