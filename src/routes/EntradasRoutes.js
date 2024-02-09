const {Router} = require('express');
const EntradasControllers = require('../controllers/Entradas.Controllers');
const EntradasRoutes = Router();

EntradasRoutes
    .get('/entradas', EntradasControllers.Todas)
    .get('/entradas/nome', EntradasControllers.FiltrarNome)

    .post('/entradas/nova', EntradasControllers.NovaEntrada)

    .put('/entradas/editar/:id', EntradasControllers.EditarEntrada)

    .delete('/entradas/apagar/:id', EntradasControllers.ApagarEntrada)

module.exports = EntradasRoutes;