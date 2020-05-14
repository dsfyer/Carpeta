const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    
    },
    escribirJSON: function(array0){
        let tareasEnJSON = JSON.stringify(array0);
        return fs.writeFileSync("tareas.json",tareasEnJSON)
    },
    guardarTarea: function (tarea){
        //aca el tareasJS se guarda en array para poder aplicar el .push en la linea 15
        let tareasJS=[this.leer()] 
        tareasJS.push(tarea)
        let tareasJSON=this.escribirJSON(tareasJS)
    },
    // FiltrarPorEstado:function (string){
    // let tareasJS=this.leer()
    // let valorstring=
    // let FiltroEstado=tareasJS.flter(function(valorstring){

    // }


    // }
    }
    



module.exports = archivoTareas;