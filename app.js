const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { getConnection } = require('./db/Configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

getConnection()

const tipoProyectos = require('./routes/tipoProyecto')
const clientes = require('./routes/cliente')
const etapas = require("./routes/etapas")
const proyecto = require("./routes/proyecto")
const universidad = require("./routes/universidad")

// middlewares

app.use('/tiposproyectos', tipoProyectos)
app.use('/clientes', clientes)
app.use('/etapas', etapas)
app.use('/proyecto', proyecto)
app.use('/universidad', universidad)


module.exports = app