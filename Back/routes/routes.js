const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller')
const usuarioController = require('../controllers/usuario.controller')
// const sesionController = require('../controllers/sesion.controller')
// const mdJWT = require('../middleware/jwt')

//usuarios
router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/obtener-usuario', usuarioController.obtenerTodosUsuarios)
router.get('/obtener-usuario/:id', usuarioController.obtenerusuario)
router.put('/actualizandoUsuario/:id', usuarioController.actualizandoUsuario)
router.delete('/borrar-usuario/:id', usuarioController.borrandoUsuario)

//Productos
router.post('/crear-producto', productosController.crearProducto)
router.get('/obtener-productos', productosController.obtenerTodosProductos)
router.get('/obtener-producto/:id', productosController.obtenerProducto)
router.put('/actualizandoproducto/:id', productosController.actualizandoProducto)
router.delete('/borrar-producto/:id', productosController.borrandoProducto)

//router.post('/ingreso',sesionController.generarToken)

module.exports = router
