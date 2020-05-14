const fs= require('fs')
const heroes = JSON.parse(fs.readFileSync("./" + '/data/heroes.json', 'utf-8'));


// app.get(/heroes/n, (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
    function pepe (){
        // Acá lo primero será encontrar al héroe que corresponda
        for (let i=0 ; i<heroes.length ; i++ ){
            console.log(​"Hola, mi nombre es ​"+(heroes[i].nombre)+" y soy "+​(heroes[i].profesion)) }
        
        // Si se encuentra al héroe se envía el nombre y su profesión
        

    }
function a (){console.log(heroes)
}

a