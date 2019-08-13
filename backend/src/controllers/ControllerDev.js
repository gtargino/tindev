const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {
        const {user} = req.headers;
        
        const loggedDev = await Dev.findById(user);
        
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ],
        });

        return res.json(users);
    },

    async store(req,res) {
        console.log();
        // pegando username dentro do objeto json de requisicao e atribuindo a 'username'
        const {username} = req.body;
        
        // verificando se usuario ja existe na base, se sim, retorna sem criar novo cadastro
        userExists = await Dev.findOne ({user: username});
        if (userExists) {
            return res.json(userExists);
        }
            
        // busca dados do usuario na api publica do github (utilizando pacote axios, que requisicoes em api's externas)
        const response = await axios.get(`https://api.github.com/users/${username}`);
        // desestruturando o retorno da api (response.data) para pegar parametros de meu interesse
        const  {name, bio, avatar_url: avatar} = response.data;
        // criando cadastro do dev a partir das infos obtidas na api do github
        const dev = await Dev.create({
            name,
            user: username,
            bio: bio,
            avatar: avatar
        });
        
        return res.json(dev);
    }
};