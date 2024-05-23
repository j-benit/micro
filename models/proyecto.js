const { Schema, model} = require('mongoose')


const ProyectoSchema = Schema({
    numero : {
        type: String,
        required: [true, 'Número requerido'],
        unique: [true]
    },
    titulo : {
        type: String,
        unique: [true]
    },
    //TODO: resto de campos
    
    tipoProyecto : {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente : {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad :{
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        require:true
    },

    etapa : {
        type: Schema.Types.ObjectId,
        ref: 'Etapas',
        require: true
    },

    // TODO: RESTO DE LOS MODELOS
    valor : {
        type: Number,
        required: [true, 'Valor requerido'],
        unique: [false]

    },
    fechaIniciacion:{
        type: Date,
        unique: [false]
    },
    fechaEntrega: {
        type: Date,
        unique: [false]
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

module.exports = model('Proyecto', ProyectoSchema)