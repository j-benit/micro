const Proyecto = require ('../models/proyecto.js')
const { request , response} = require ("express")
const TipoProyecto = require('../models/tipoProyecto')
const Cliente = require("../models/clientes.js")

// crar
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const data = req.body

        const { tipoProyecto, cliente } = data;
     
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id
        })
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'tipo proyecto invalido'})
        }
        const clienteDB = Cliente.findOne({
            _id: cliente._id
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }

        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)

    } catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}
//listar 
const getProyectos = async (req = request, 
    res = response) => {
        try{
          
            const proyectosDB = await Proyecto.find()
               .populate({
                    path: 'tipoProyecto'
                })
                .populate({
                    path: 'cliente'
                })
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar

const updateProyectoByID = async (req = request, 
    res = response) => {
    try{
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { 
    createProyecto, 
    getProyectos, 
    updateProyectoByID 
}