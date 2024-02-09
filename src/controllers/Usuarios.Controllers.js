const UsuarioModel = require("../models/Usuarios.Model");

const MsgErro = "Por favor, tente novamente."

class Usuarios {
    // CRIA NOVO USUÁRIO
    async NovoUsuario(req, res) {
        try {
            const dados = req.body
            const novoUsuario = await UsuarioModel.create(dados)
            res.json({ "Mesagem": `Usuário ${novoUsuario.nome} ${novoUsuario.sobrenome} foi cadastrado` })
        } catch (error) {
            res.json({ "Erro": "Erro ao cadastrar dados do novo usuário! " + MsgErro })
        }
    }
    // BUSCA TODOS OS USUÁRIOS
    async Todos(req, res) {
        try {
            const todos = await UsuarioModel.find()
            res.json(todos)
        } catch (error) {
            res.json({ "Erro": "Erro ao buscar dados dos usuários! " + MsgErro })
        }
    }
    // FILTRA ENTRADAS DO USUARIO
    async FiltrarNomeUsuario(req, res) {
        try {
            const nome = req.body.nome
            const nomeUsuario = await UsuarioModel.find({nome: nome})
            res.json(nomeUsuario)
        } catch (error) {
            res.json({ "Erro": "Erro ao buscar dados dos usuários! " + MsgErro })
        }
    }
    // CADASTRAR ENTRADAS
    // async Entradas(req, res) {
    //     try {
    //         const {id} = req.params
    //         const nome = req.body.nome
    //         const sobrenome = req.body.sobrenome
    //         const entradas = req.body.entradas
    //         const novaEntrada = await UsuarioModel.aggregate({_id: id}, entradas)
    //         res.json(novaEntrada)
    //     } catch (error) {
    //         res.json({ "Erro": "Erro ao cadastrar nova entrada! " + MsgErro});
    //     }
    // }
    
    // VER TODAS AS ENTRADAS DO USUÁRIO
    async VerEntradas(req, res) {
        // const entradas = req.body.entradas
        const entradas = req.body.entradas
        const verEntradas = await UsuarioModel.find({entradas: entradas})
        res.json(verEntradas)
    }
    // APAGA CADASTRO DO CLIENTE
    async Apagar(req, res) {
        try {
            const {id} = req.params
            const apagar = await UsuarioModel.findByIdAndDelete(id)
            res.json({"Mensagem": "Dados excluidos com sucesso."})
        } catch (error) {
            res.json({ "Erro": "Erro ao apagar dados! " + MsgErro })
        }
    }
}

const UsuariosControllers = new Usuarios

module.exports = UsuariosControllers