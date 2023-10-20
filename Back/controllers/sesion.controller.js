require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

exports.generarToken = async (req, res) => {
    console.log(req.body)
    const { correo, password } = req.body

    const usuario2 = await Usuario.find()
    console.log(usuario2)
    const usuario = await Usuario.findOne({ email: correo })
    console.log(usuario)
    if (!usuario) {
        return res.status(401).json({ msg: "El correo es invalido" })
    }
    if (usuario.password !== password) {
        return res.status(401).json({ msg: "La contraseña es invalida" })
    }
    
    const payload = {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '6h' })
    return res.status(202).json({ token: token })
}
