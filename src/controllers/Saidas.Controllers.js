const SaidaModel = require("../models/Saidas.Model");

const MsgErro = "Por favor, tente novamente."

class Saidas {
    // CRIA NOVA Saida DE PAGAMENTO
    async NovaSaida(req, res) {
        try {
            const dados = req.body
            const novaSaida = await SaidaModel.create(dados)
            res.json({"Mensagem": `Nova Saida ${novaSaida.nome} cadastrada com sucesso`})
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao tentar cadastrar a nova Saida. ${MsgErro}`})
        }
    }
    // BUSCA TODAS AS SaidaS
    async Todas(req, res) {
        try {
            const todas = await SaidaModel.find()
            res.json(todas)
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das Saidas. ${MsgErro}`})
        }
    }
    // FILTRA Saida PELO NOME
    async FiltrarNome(req, res) {
        try {
            const nome = req.body.nome
            const filtrarNome = await SaidaModel.find({nome: nome})
            res.json(filtrarNome)
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das Saidas. ${MsgErro}`})
        }
    }
    // FILTRA E EDITA UMA Saida PELO ID
    async EditarSaida(req, res) {
        try {
            const {id} = req.params
            const dados = req.body
            const editar = await SaidaModel.findByIdAndUpdate({_id: id}, dados)
            res.json({"Mensagem": "A edição da Saida foi realizada com sucesso."}) 
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das Saidas para edição. ${MsgErro}`})
        }
    } 
    // DELETA Saida DE PAGAMENTO
    async ApagarSaida(req, res) {
        try {
            const {id} = req.params
            const apagar = await SaidaModel.findOneAndDelete({_id: id})
            res.json({"Mensagem": `A Saida ${apagar.nome} foi apagada como solicitado.`})
        } catch (error) {
            res.json({"Erro!": `Tivemos um erro ao buscar os dados das Saidas. ${MsgErro}`})
        }
    }
}

const SaidasControllers = new Saidas

module.exports = SaidasControllers