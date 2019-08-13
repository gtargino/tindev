const express = require('express');
const ControllerDev = require('./controllers/ControllerDev.js');
const LikeController = require('./controllers/LikeController.js');
const DislikeController = require('./controllers/DislikeController.js');

const routes = express.Router();

// GET da requisicao, parametro '/' para viabilizar acesso direto a raiz do endereco, mas poderia ser '/users', '/forum', etc
// segundo parametro com funcao que gerencia os objetos de request/response do server

routes.get('/', function(req,res) {
    req.query.name;
    //return res.send(`Hello fking world! ${req.query.name}`); // aprendi desse jeito, mas tentei o de baixo e funcionou
    //return res.send('Hello fking world!' + req.query.name);
    return res.json({ message:`Hello fking world!!! ${req.query.name}` }); // por convencao, melhor retornar como objeto json
});

routes.post('/dev', ControllerDev.store);
routes.post('/dev/:devId/likes', LikeController.store);
routes.post('/dev/:devId/dislikes', DislikeController.store);
routes.get('/dev', ControllerDev.index);

// expondo variavel de rotas para que o server.js possa enxergar
module.exports = routes;