const fs=require('fs')
const express = require('express')
const router = express.Router()
const heroes=JSON.parse(fs.readFileSync('/Users/mateobarbato/Desktop/DH/carpeta sin título/data/heroes.json', 'utf-8'));


router.get('/', function(req,res) {
    res.send(heroes);
    
});

router.get('/:id', function (req,res){
    const found = heroes.find(heroes=>heroes.id == req.params.id);
    console.log(found) 
    let valorID= (req.params.id - 1)
    let heroeconvalor=heroes[valorID]
    // Si se encuentra al héroe se envía el nombre y su profesión
    if (found == undefined){
            res.send('Error 404, no encontramos tu heroe, verificar el id')
            
         
         // Si NO se encuentra se envía el mensaje de no encontrado
        }
    else {
            res.send('Hola, mi nombre es '+ heroeconvalor.nombre +' y soy '+ heroeconvalor.profesion);
        }
    });
router.get('/:id/:ok', function(req,res){
    const found = heroes.find(heroes=>heroes.id == req.params.id);
    let valorOK=req.params.ok
    let valorID= (req.params.id - 1)
    let heroeconvalor=heroes[valorID]
    if (found == undefined){
    res.send('​No encontramos un héroe para mostrarte su biografía')
} 
    else if (valorOK == 'ok'){
        res.send(heroeconvalor.nombre + "    " + heroeconvalor.resenia)
    }else if (valorOK == undefined){              // en esta linea no consigo que detecte si esta el campo vacio, es decir si solo pongo el id deveria saltar este.
        res.send(heroeconvalor.nombre + "Lamento que no desees saber mas de mi :(")
     }
     else console.log('algo raro esta pasando');
      
    }
);
    module.exports = router;