function encontrarMaior(numeros){
if (numeros.length === 0 ){
  return "o array está vazio"
}
let maior = numeros[0]
for(i = 1; i < numeros.length; i++){
    if (numeros[i] > maior ){
        maior = numeros[i]}
}

return `o maior é ${maior}`
}
arrayNumeros = [13,90,60,109,78,900,1800,43]
resultado = encontrarMaior(arrayNumeros)
console.log(resultado)