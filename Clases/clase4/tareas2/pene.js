

function noParesDeContarImparesHasta(numero){
 let impares=0
 let pares=0
    for(var i=0 ; i<=numero ; i++ ){
if (i%2!=0){
impares=impares+1;
}else pares=pares+1;
}
return impares
}