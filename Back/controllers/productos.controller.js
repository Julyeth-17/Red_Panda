const Productos = require('../models/Productos');

exports.crearProducto = async (req, res) => {
    console.log(req.body);
    try {
        let productoModel
        productoModel = new Productos(req.body)
        await productoModel.save()
        res.send(productoModel)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.obtenerTodosProductos = async (req, res) => {
    try {
        let productoData = await Productos.find()
        res.json(productoData)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}
exports.obtenerProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {

            const productoData = await Productos.findById(req.params.id)
            console.log('file:usuario.controller.js:29 -> usuarioData: ', productoData)
            if (!productoData) {
                res.status(404).send("Esto no existe manito")
            } else {
                res.json(productoData)
            }
        } else {
            res.status(418).send('el id no exis o no es correctisimo')
        }
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.actualizandoProducto = async (req, res) => {
        try {
            const { nombre, imagen, descripcion, precio, disponible, unidades } = req.body
            let dataProducto = await Usuario.findById(req.params.id)
            if (!dataProducto) {
                res.status(404).json({ mensaje: 'El usuario no existe' })
                return
            }
    
            dataProducto.nombre = nombre
            dataProducto.imagen = imagen
            dataProducto.descripcion = descripcion
            dataProducto.precio = precio
            dataProducto.disponible = disponible
            dataProducto.unidades=unidades
    
            dataProducto = await Usuario.findOneAndUpdate({ _id: req.params.id }, dataProducto)
            res.json(dataProducto)
    
        } catch (error) {
            console.log(error)
            res.status(500).send('Ups, algo paso, comuníquese con el administrador')
        }
    }

exports.borrandoProducto = async (req, res) => {
    console.log(req.ip);
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const productoData = await Productos.findById(req.params.id)
            if (!productoData) {
                return res.status(404).send("Esto no existe manito")
            } else {
                await Productos.findOneAndRemove({ _id: req.params.id })
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
