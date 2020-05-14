
// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');
let rutasHeroes=require('/Users/mateobarbato/Desktop/DH/carpeta sin título/routes/heroes.js')
let rutasMain= require('/Users/mateobarbato/Desktop/DH/carpeta sin título/routes/main.js')

// Ejecución de Express
const app = express();
let port=3030
app.listen( port,'localhost', () => console.log('Server running in 3030 port'));


app.use('/heroes', rutasHeroes)
app.use('/' , rutasMain)

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync("./" + '/data/heroes.json', 'utf-8'));





// app.get
// ¿?

// Ruta... ¿Pára qué sirve esto?
//app.get('*', (req, res) => {
//	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')})
module.exporst=heroes;