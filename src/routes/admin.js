const express = require ('express');
const router = express.Router();
const { crear, list, editar, eliminar } = require('../controllers/adminController')
const adminLogs = require('../middlewares/adminLogs')

router.get('/',adminLogs,list ) ;
router.get('/editarProducto',adminLogs, editar) ;
router.get('/crearProducto', adminLogs,crear) ;
router.get('/eliminarProducto',adminLogs, eliminar)




module.exports = router