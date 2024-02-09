const mongoose = require("mongoose");

const Saida = new mongoose.Schema({
    nome: String,
    valor: Number,
    data: Date
})

const SaidaModel = mongoose.model('Saidas', Saida)

module.exports = SaidaModel