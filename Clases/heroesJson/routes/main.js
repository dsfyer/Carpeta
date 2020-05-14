const express = require('express')
const router = express.Router()

// Ruta Raíz / ➝ Home
router.get('/', function(req,res){
	res.send("​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio." +  "<br>" + 
	"Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos." + "<br>" + "Recuerda: ¡nunca pares de creer en ti!");
	
});

router.get('/creditos', function(req,res){
    res.send("Este archivo fue creado con esfuerzo y sudor a gotas por Mateo Barbato o mas conocido como Galle *ruidos de ovacion* <br> Espero que te informes de estos Heroes contemporaneos!")
})
module.exports = router;