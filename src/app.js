const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
    res.send(
        'Bem vindo ao nosso sistema. Essa é a nossa API responsável para guardar dados sobre suas finanças. \n Tenha um bom proveito da nossa API.',
    )
})

module.exports = app