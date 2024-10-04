function resolverEquacaoSegundoGrau (a, b, c) {
let delta = b * b - 4 * a * c;

if (delta < 0){
    console.log('A equação não possui solução real')
}
else if (delta === 0){
    let x = -b/(2*a)
    console.log('A equação tem uma solução: x = ', x)
}
else {
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log('A equação possui duas soluções reais: x1 =',x1,'e x2 =', x2)
}
}
resolverEquacaoSegundoGrau(1,7,2)