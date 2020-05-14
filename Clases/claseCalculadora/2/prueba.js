
numero=13



function noParesDeContarImparesHasta(numero){
    let resultado=0
    for(var i=0; i<=numero;i++)
{if (i%2!==0){
resultado=resultado+1
}
}
return resultado;