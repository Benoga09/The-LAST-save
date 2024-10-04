let valor = 120
if (valor <= 100) {
console.log("preço: R$" + valor.toFixed(2));
}
else if (valor > 100 , valor <= 500) {
console.log("preço: " + valor.toFixed(2) * 0.9 ) ;
}
else { (valor > 500)
    let desconto = valor * 0.15
    console.log('preço:' + (valor - desconto).toFixed(2))
}
