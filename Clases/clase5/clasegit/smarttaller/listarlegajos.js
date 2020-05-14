let mecanicos=require("./mecanicos")
listarLegajos = function(){
 for (var i=0;i<mecanicos.length;i++){
   let legajos= mecanicos[i].legajo;
   console.log(i+" "+legajos)
   }
 
   
}
listarLegajos()


module.exports=listarLegajos;mecanicos


   
