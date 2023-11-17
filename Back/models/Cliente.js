const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
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
    pago: {
        type: Number,
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
    direccion: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('cliente', clienteSchema)
