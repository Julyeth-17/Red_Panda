const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    disponible: {
        type: Boolean,
        require: true
    },
    unidades: { //unidades disponible
        type: Number,
        require: true
    },
    fec_cre:{
        type: Date,
        default: Date.now(),
    },

    

})
module.exports = mongoose.model('producto', productoSchema)