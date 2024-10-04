let inventario = ["espada de diamante", "botas de couro", "maçã dourada", "capacete de ouro","cama"];


let novoItem ="Pérola do Ender"
inventario.push(novoItem)
console.log("inventario:", inventario)
console.log("um goblin apareceu! prepare-se para a batalha.");

let itemUsado1 = inventario[4]
console.log(`você ataca o goblin com sua ${itemUsado1}!`)

let itemUsado2 = inventario[1]
console.log(`você ataca o goblin com sua ${itemUsado2}`)
console.log(` o goblin vai dormir na ${itemUsado1} com as ${itemUsado2}` )
console.log("!FIM!")