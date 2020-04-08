const express = require ('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//para logar no sitema
routes.get('/sessions', SessionController.create);

//listar todos os incidentes de uma ong
routes.get('/profile', ProfileController.index);

//rota para listar
routes.get('/ongs', OngController.index);

//rota para incluir ong
routes.post('/ongs', OngController.create);

//rota para listar
routes.get('/incidents', IncidentController.index);

//rota para incluir incidents
routes.post('/incidents', IncidentController.create);

//rota para deletar incidents
routes.post('/incidents/:id', IncidentController.delete);

//para exportar uma variavel de dentro de um arquivo
module.exports = routes;