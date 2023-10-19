const express = require ('express')
const router = express.Router()
const detalleCoreController = require('../controllers/detalle-core.controller')
const contactoController = require('../controllers/contacto.controller')
const mdJWT = require('../middleware/jwt')

router.get('/obtener-detalle', detalleCoreController.obtenerTodosLosDetalles)  
router.get('/buscar-detalle/:id', detalleCoreController.obtenerUnSoloDetalle)  
router.post('/crear-detalle/', detalleCoreController.crearDetalle)  
router.put('/actualizar-detalle/:id', detalleCoreController.actualizarDetalle)
router.delete('/eliminar-detalle/:id', detalleCoreController.eliminarDetalle)

