const Cliente = require('../models/Cliente');

exports.crearCliente = async (req, res) => {
    console.log(req.body);
    try {
        let clienteModel
        clienteModel = new Cliente(req.body)
        await clienteModel.save()
        res.send(clienteModel)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.obtenerTodosLosClientes = async (req, res) => {
    try {
        let clienteData = await Cliente.find()
        res.json(clienteData)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}
exports.obtenerCliente = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {

            const clienteData = await Cliente.findById(req.params.id)
            if (!clienteData) {
                res.status(404).send("Esto no existe manito")
            } else {
                res.json(clienteData)
            }
        } else {
            res.status(418).send('el id no exis o no es correctisimo')
        }
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.actualizarCliente = async (req, res) => {
        try {
    
            const { nombre, email, password } = req.body
            let dataCliente = await Cliente.findById(req.params.id)
            if (!dataUsuario) {
                res.status(404).json({ mensaje: 'El cliente no existe' })
                return
            }
    
            dataCliente.nombre = nombre
            dataCliente.email = email
            dataCliente.password = password
    
            dataCliente = await Usuario.findOneAndUpdate({ _id: req.params.id }, dataCliente)
            res.json(dataCliente)
    
        } catch (error) {
            console.log(error)
            res.status(500).send('Ups, algo paso, comuníquese con el administrador')
        }
    }

exports.eliminarCliente = async (req, res) => {
    console.log(req.ip);
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const clienteData = await Cliente.findById(req.params.id)
            if (!clienteData) {
                return res.status(404).json({msg: "Esto no existe manito"})
            } else {
                await Cliente.findOneAndRemove({ _id: req.params.id })
                return res.json({msg:"Borrando todo todito"})
            }
        } else {
            return res.status(400).json({msg: "ID no válido"})
        }
    } catch (error) {
        console.log(error);
        return res.status(502).json({msg:'jejé no sé qué pasó'})
    }
};

