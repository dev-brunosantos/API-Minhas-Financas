const { Router } = require('express');
const SaidasControllers = require('../controllers/Saidas.Controllers');
const SaidasRoutes = Router();

SaidasRoutes
    .get('/saidas', SaidasControllers.Todas)
    .get('/saidas/nome', SaidasControllers.FiltrarNome)

    .post('/saidas/nova', SaidasControllers.NovaSaida)

    .put('/saidas/editar/:id', SaidasControllers.EditarSaida)

    .delete('/saidas/apagar/:id', SaidasControllers.ApagarSaida)

module.exports = SaidasRoutes;