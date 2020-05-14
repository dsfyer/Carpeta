let autos=require("./autos")

listarPatentes = function(){
    for (var i=0;i<autos.length;i++){
       let patentes=autos[i].patente
       console.log(i+" "+patentes)
    }
 
 }
 listarPatentes()
 
 
 
 module.exports=listarPatentes;autos