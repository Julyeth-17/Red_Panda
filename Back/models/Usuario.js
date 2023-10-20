const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    postal: {
        type: Number,
        required: false
    },
    newsletter: {
        type: Boolean,
        required: true
    },
    condiciones: {
        type: Boolean,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('usuario', usuarioSchema)
