const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    entradas: Array,
    saidas: Array
})

const UsuarioModel = mongoose.model('Usuarios', Usuario)

module.exports = UsuarioModel