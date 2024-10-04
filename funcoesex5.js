function calcularDesconto (valor, desconto){
let descontototal = (valor * desconto) / 100
return `seu desconto é:`, descontototal 
}
let descontototal = calcularDesconto(100, 15)
console.log ("Desconto é:", descontototal.toFixed(2))