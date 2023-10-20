const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller')
const usuarioController = require('../controllers/usuario.controller')
const sesionController = require('../controllers/sesion.controller')
const mdJWT = require('../middleware/jwt')

//usuarios
router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/obtener-usuarios', mdJWT.verificarToken, usuarioController.obtenerTodosUsuarios)
router.get('/obtener-usuario/:id', mdJWT.verificarToken, usuarioController.obtenerusuario)
router.put('/actualizar-usuario/:id', usuarioController.actualizandoUsuario)
router.delete('/eliminar-usuario/:id', usuarioController.borrandoUsuario)

//Productos
router.post('/crear-producto', productosController.crearProducto)
router.get('/obtener-productos', mdJWT.verificarToken, productosController.obtenerTodosProductos)
router.get('/obtener-producto/:id', mdJWT.verificarToken, productosController.obtenerProducto)
router.put('/actualizar-productos/:id', productosController.actualizandoProducto)
router.delete('/eliminar-producto/:id', productosController.borrandoProducto)

router.post('/ingreso',sesionController.generarToken)

module.exports = router
