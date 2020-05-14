const express = require('express');
const router = express.Router();
const productsController=require('../controllers/productsController')


// /Products(get)MUESTRA TODO LOS PRODUCTOS
router.get('/',productsController.productos)
// /Products/Detail/:id   MUESTRA SOLO UN PRODUCTO
router.get('/detail/:id/',productsController.detalle)
// HACER EL EJS Y LA RUTA PARA PODER ACCEDER Y LLENAR EL FORMULARIO DE PEDIDO DE CAMBIO;
router.get('/edit/:id', productsController.recibir) //Aca recibo la informacion del usuario 

router.get('/create', productsController.create)

// PUT Hacer un controller de cada uno de estos y hacerlos funcionales

//DatosCreado
router.put('/create', productsController.dataCreado)//ACA IMPORTANTE UBICAR BIEN LA RUTA EN EL FORMULARIO EN CREATE;


//Delete
router.delete('/delete/:id', productsController.delete)

//EDITAR
router.put('/edit/:id', productsController.editar)











module.exports = router;