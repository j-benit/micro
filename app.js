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

const proyecto = require("./routes/proyecto")


// middlewares


app.use('/proyecto', proyecto)


module.exports = app