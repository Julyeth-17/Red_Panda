const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller')
const usuarioController = require('../controllers/usuario.controller')
const sesionController = require('../controllers/sesion.controller')
const clienteController = require('../controllers/cliente.controller')
const mdJWT = require('../middleware/jwt')

//Usuarios
router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/obtener-usuarios', mdJWT.verificarToken, usuarioController.obtenerTodosUsuarios)
router.get('/obtener-usuario/:id', mdJWT.verificarToken, usuarioController.obtenerusuario)
router.put('/actualizar-usuario/:id', usuarioController.actualizandoUsuario)
router.delete('/eliminar-usuario/:id', usuarioController.borrandoUsuario)

//Productos
router.post('/crear-producto', productosController.crearProducto)
router.get('/obtener-productos', productosController.obtenerTodosProductos)
router.get('/obtener-producto/:id', mdJWT.verificarToken, productosController.obtenerProducto)
router.get('/llamar-producto/:id', productosController.llamarProducto)
router.put('/actualizar-productos/:id', productosController.actualizandoProducto)
router.delete('/eliminar-productos/:id', productosController.borrandoProducto)

//Clientes
router.post('/crear-cliente', clienteController.crearCliente)
router.get('/obtener-clientes', clienteController.obtenerCliente)
router.get('/obtener-cliente/:id', clienteController.obtenerCliente)
router.put('/actualizar-cliente/:id', clienteController.actualizarCliente)
router.delete('/eliminar-cliente/:id', clienteController.eliminarCliente)

router.post('/ingreso', sesionController.generarToken)

module.exports = router
