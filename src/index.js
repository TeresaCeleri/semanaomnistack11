//qdo quero importar alguma coisa para dentro do meu projeto
const express = require('express');

const cors = require('cors');

//o ponto + barra refere-se a uma pasta
const routes = require('./routes');

//variavel que vai guardar a minha aplicação
const app = express(); 

//para git segurança do sistema 
//permitir que sessoes front-end acessem o back-end
//app.use(cors({origin: 'http://meuapp.com'}));
app.use(cors());

//passar que vamos usar JSON - deve ser colocado antes das rotas
app.use(express.json());

//precisa ser colocada abaixo da linha anterior sempre
app.use(routes);

//mandar a aplicação ouvir a porta 
app.listen(3333);