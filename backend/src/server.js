const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// fazendo com que o server enxergue as rotas em routes.js
const routes = require('./routes'); 
const server = express();

mongoose.connect('mongodb+srv://last:last@cluster0-q7wif.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);