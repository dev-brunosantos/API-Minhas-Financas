const {Router} = require('express');
const EntradasControllers = require('../controllers/Entradas.Controllers');
const EntradasRoutes = Router();

EntradasRoutes
    .get('/entradas', EntradasControllers.Todas)
    
    .post('/entradas/nova', EntradasControllers.NovaEntrada)
    .post('/entradas/nome', EntradasControllers.FiltrarNome)

    .put('/entradas/editar/:id', EntradasControllers.EditarEntrada)

    .delete('/entradas/apagar/:id', EntradasControllers.ApagarEntrada)

module.exports = EntradasRoutes;