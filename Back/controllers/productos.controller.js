const Productos = require('../models/Productos');

exports.crearProducto = async (req, res) => {
    console.log(req.body);
    try {
        let productoModel
        productoModel = new Productos(req.body)
        await productoModel.save()
        res.json(productoModel)
    } catch (error) {
        console.log(error);
        res.status(502).json({ msg: 'jejé no sé que paso' })
    }
}

exports.obtenerTodosProductos = async (req, res) => {
    try {
        let productoData = await Productos.find()
        res.json(productoData)
    } catch (error) {
        console.log(error);
        res.status(502).json({ msg: 'jejé no sé que paso' })
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[a-fA-F0-9]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const productoData = await Productos.findById(req.params.id)
            console.log('file:usuario.controller.js:29 -> usuarioData: ', productoData)
            if (!productoData) {
                res.status(404).json({ msg: "Esto no existe manito" })
            } else {
                res.json(productoData)
            }
        } else {
            res.status(418).json({ msg: 'el id no exis o no es correctisimo' })
        }
    } catch (error) {
        console.log(error);
        res.status(502).json({ msg: 'jejé no sé que paso' })
    }
}

exports.llamarProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[a-fA-F0-9]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const productoData = await Productos.findById(req.params.id)
            console.log('file:usuario.controller.js:29 -> usuarioData: ', productoData)
            if (!productoData) {
                res.status(404).json({ msg: "Esto no existe manito" })
            } else {
                res.json(productoData)
            }
        } else {
            res.status(418).json({ msg: 'el id no exis o no es correctisimo' })
        }
    } catch (error) {
        console.log(error);
        res.status(502).json({ msg: 'jejé no sé que paso' })
    }
}

exports.actualizandoProducto = async (req, res) => {
    try {
        let regexIdMongo = /^[a-fA-F0-9]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const dataProducto = await Productos.findById(req.params.id)
            if (!dataProducto) {
                res.status(404).json({ mensaje: 'El producto no existe' })
            } else {
                const { nombre, imagen, descripcion, precio, disponible, unidades } = req.body
                dataProducto.nombre = nombre
                dataProducto.imagen = imagen
                dataProducto.descripcion = descripcion
                dataProducto.precio = precio
                dataProducto.disponible = disponible
                dataProducto.unidades = unidades
                let dataProductoActualizado = await Productos.findOneAndUpdate({ _id: req.params.id }, dataProducto, { new: true })
                res.json(dataProductoActualizado)
            }
        } else {
            res.status(418).json({ response: 'El Id proporcionado no existe o no es correcto' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ups, algo paso, comuníquese con el administrador' })
    }
}

exports.borrandoProducto = async (req, res) => {
    console.log(req.ip);
    try {
        let regexIdMongo = /^[a-fA-F0-9]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const productoData = await Productos.findById(req.params.id)
            if (!productoData) {
                res.status(404).send("Esto no existe manito")
                return
            }
        } await Productos.findOneAndRemove({ _id: req.params.id })
        return res.json({ msg: "Borrando todo todito" })
        {
        }
    } catch (error) {
        console.log(error);
        return res.status(502).json({ msg: 'jejé no sé qué pasó' })
    }
}

