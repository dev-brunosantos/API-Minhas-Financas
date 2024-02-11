const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app