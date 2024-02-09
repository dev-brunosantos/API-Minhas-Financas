const mongoose = require('mongoose');
const conexao = mongoose.connect(`${process.env.MONGO_URL}`)

conexao 
    .then(console.log('Conexão com o Banco de Dados realizada com sucesso.'))
    .catch((error) => {
        console.log('Erro ao tentar conexão com o Banco de Dados! Por favor, tentar novamente.')
    })

module.exports = conexao

