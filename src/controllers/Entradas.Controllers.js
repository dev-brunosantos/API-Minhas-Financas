const EntradaModel = require("../models/Entradas.Model");

const MsgErro = "Por favor, tente novamente."

class Entradas {
    // CRIA NOVA ENTRADA DE PAGAMENTO
    async NovaEntrada(req, res) {
        try {
            const dados = req.body
            const novaEntrada = await EntradaModel.create(dados)
            res.json({"Mensagem": `Nova entrada ${novaEntrada.nome} cadastrada com sucesso`})
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao tentar cadastrar a nova entrada. ${MsgErro}`})
        }
    }
    // BUSCA TODAS AS ENTRADAS
    async Todas(req, res) {
        try {
            const todas = await EntradaModel.find()
            res.json(todas)
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das entradas. ${MsgErro}`})
        }
    }
    // FILTRA ENTRADA PELO NOME
    async FiltrarNome(req, res) {
        try {
            const nome = req.body.nome
            const filtrarNome = await EntradaModel.find({nome: nome})
            res.json(filtrarNome)
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das entradas. ${MsgErro}`})
        }
    }
    // FILTRA E EDITA UMA ENTRADA PELO ID
    async EditarEntrada(req, res) {
        try {
            const {id} = req.params
            const dados = req.body
            const editar = await EntradaModel.findByIdAndUpdate({_id: id}, dados)
            res.json({"Mensagem": "A edição da entrada foi realizada com sucesso."}) 
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das entradas para edição. ${MsgErro}`})
        }
    } 
    // DELETA ENTRADA DE PAGAMENTO
    async ApagarEntrada(req, res) {
        try {
            const {id} = req.params
            const apagar = await EntradaModel.findOneAndDelete({_id: id})
            res.json({"Mensagem": `A entrada ${apagar.nome} foi apagada como solicitado.`})
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das entradas. ${MsgErro}`})
        }
    }
}

const EntradasControllers = new Entradas

module.exports = EntradasControllers