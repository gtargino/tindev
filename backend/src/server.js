const express = require('express');
const server = express();
server.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://last:last@cluster0-q7wif.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const routes = require('./routes'); // fazendo com que o server enxergue as rotas em routes.js
server.use(routes);

server.listen(3333);