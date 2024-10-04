//função para retornar um novo array com o primeiro e o último número dividido por dois
function dividirPrimeiroeUltimo (numeros){
    let primeiro = numeros[0] / 2 //dividimos o primeiro array por dois
    let ultimo = numeros[numeros.length-1]/2
    //dividindo o ultimo numero por dois
    return [primeiro, ultimo]
}
//chamada
let arraynumeros = [12, 40, 43, 90, 60, 100]
let resultado = dividirPrimeiroeUltimo
(arraynumeros)
console.log("Novo array", resultado)