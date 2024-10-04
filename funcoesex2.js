function calcularMedia (n1, n2, n3, n4, n5) {
    let media = (n1 + n2 + n3 + n4 + n5) / 5
    return `sua media é`, media
}
let notaBenicio = calcularMedia(9, 7, 9, 3, 1 )
console.log("A nota de Benicio é:", notaBenicio.toFixed(2))