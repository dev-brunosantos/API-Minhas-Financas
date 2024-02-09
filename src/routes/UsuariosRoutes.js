const {Router} = require('express');
const UsuariosControllers = require("../controllers/Usuarios.Controllers");
const UsuarioRoutes = Router();

UsuarioRoutes
    .get('/usuarios', UsuariosControllers.Todos)
    .get('/usuarios/nome', UsuariosControllers.FiltrarNomeUsuario)
    .get('/usuarios/ver_entradas', UsuariosControllers.VerEntradas)

    .post('/usuarios/novo', UsuariosControllers.NovoUsuario)
    // .put('/usuarios/entradas/:id', UsuariosControllers.Entradas)

    .delete('/usuarios/apagar/:id', UsuariosControllers.Apagar)

module.exports = UsuarioRoutes
