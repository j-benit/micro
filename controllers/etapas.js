const Etapas = require('../models/Etapas')
const { request, response } = require('express')

// CREAR

const createEtapas = async (req = request, res = response) => {
    try {
        const data = req.body
        const etapas = new Etapas(data)
        await etapas.save()
        return res.status(201).json(etapas)
    } catch (error) {
        return res.status(500).json({
            msj: error
        })
    }
}
// listar 

const getEtapas= async (req = request, res = response) => {
    try {
        const etapas = await Etapas.find()
        return res.json(etapas)
    } catch (error) {
        return res.status(500).json({
            msj: error
        })
    }
}

//actualizar
const updateEtapasById = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const { nombre } = req.body
        const data = { nombre }
        data.fechaActualizacion = new Date()

        const etapas = await Etapas.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(etapas)
    } catch (error) {
        return res.status(500).json({
            msj: error
        })
    }


}


module.exports = {
    createEtapas,
    getEtapas,
    updateEtapasById
}
