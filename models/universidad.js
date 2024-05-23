
 // nombre, dirección, teléfono, fecha de creación y fecha de actualización
 const { Schema, model } = require('mongoose')

 const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true]
    },
    direccion:{
        type: String,
        required: [true,'direccion es requerida'],
        unique:[true]

    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('universidad', UniversidadSchema)