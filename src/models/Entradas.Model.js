const mongoose = require("mongoose");

const Entrada = new mongoose.Schema({
    nome: String,
    valor: Number,
    data: Date
})

const EntradaModel = mongoose.model('Entradas', Entrada)

module.exports = EntradaModel