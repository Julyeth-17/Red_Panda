const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    console.log(req.body);
    try {
        let usuarioModel
        usuarioModel = new Usuario(req.body)
        await usuarioModel.save()
        res.send(usuarioModel)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.obtenerTodosUsuarios = async (req, res) => {
    try {
        let usuarioData = await Usuario.find()
        res.json(usuarioData)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}
exports.obtenerusuario = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {

            const usuarioData = await Usuario.findById(req.params.id)
            console.log('file:usuario.controller.js:29 -> usuarioData: ', usuarioData)
            if (!usuarioData) {
                res.status(404).send("Esto no existe manito")
            } else {
                res.json(usuarioData)
            }
        } else {
            res.status(418).send('el id no exis o no es correctisimo')
        }
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.actualizandoUsuario = async (req, res) => {
        try {
    
            const { nombre, apellido, email, password,ciudad, telefono, postal, newsletter, condiciones } = req.body
            let dataUsuario = await Usuario.findById(req.params.id)
            if (!dataUsuario) {
                res.status(404).json({ mensaje: 'El usuario no existe' })
                return
            }
    
            dataUsuario.nombre = nombre
            dataUsuario.apellido = apellido
            dataUsuario.email = email
            dataUsuario.password = password
            dataUsuario.ciudad = ciudad
            dataUsuario.telefono= telefono
            dataUsuario.postal= postal
            dataUsuario.newsletter= newsletter
            dataUsuario.condiciones=condiciones
    
            dataUsuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, dataUsuario)
            res.json(dataUsuario)
    
        } catch (error) {
            console.log(error)
            res.status(500).send('Ups, algo paso, comuníquese con el administrador')
        }
    }

exports.borrandoUsuario = async (req, res) => {
    console.log(req.ip);
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const usuarioData = await Usuario.findById(req.params.id)
            if (!usuarioData) {
                return res.status(404).send("Esto no existe manito")
            } else {
                await Usuario.findOneAndRemove({ _id: req.params.id })
                return res.send("Borrando todo todito")
            }
        } else {
            return res.status(400).send("ID no válido")
        }
    } catch (error) {
        console.log(error);
        return res.status(502).send('jejé no sé qué pasó')
    }
};

