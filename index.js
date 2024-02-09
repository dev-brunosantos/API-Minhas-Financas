require('dotenv').config();
const conexao = require('./mongo');
const app = require("./src/app");

const link = process.env.LINK;
const port = process.env.PORT || 4000;
const url = `${link}:${port}`;

async function Database() {
    await conexao
}

app.listen(port, () => {
    console.log(`Servidor rodando em: ${url}`),
    Database()
})