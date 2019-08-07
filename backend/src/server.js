const express = require('express');
const server = express();

const routes = require('./routes'); // fazendo com que o server enxergue as rotas em routes.js
server.use(routes);

server.listen(3333);