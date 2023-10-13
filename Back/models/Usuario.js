const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({


    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    ciudad: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    postal: {
        type: Number,
        require: false
    },
    newsletter: {
        type: Boolean,
        require: true
    },
    condiciones: {
        type: Boolean,
        require: true
    },
    fec_cre: {
        type: Date,
        default: Date.now(),
    },






})
module.exports = mongoose.model('usuario', usuarioSchema)