function ingressarFaculdade (concluirMedio, idade, cursandoOutra){
    if(concluirMedio && idade >= 18 && ! cursandoOutra){
        return "Você pode cursar essa faculdade!!!"
    } else {
        return "Sentimos muito, você não é qualificado."
    }
    }
let concluirMedio = true
let idade = 492
let cursandoOutra = false

let resultado = ingressarFaculdade(concluirMedio, idade, cursandoOutra)
console.log(resultado)
