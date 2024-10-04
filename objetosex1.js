const cachorro1 = {
nome: 'Belinha',
idade: 5,
raca: `Pitbull`,
cor: "Branca",
latir: function(){
    console.log("AU,AU,AU")
},
comer: function(comida){
    console.log(`${this.nome}`+ " está comendo " + `${comida}`)
},
unificando: function(){
    console.log("Está é a",`${this.nome}`,"uma",`${this.raca}`, "de", `${this.idade}`, "anos e cor", `${this.cor}`)
}
}

cachorro1.latir()
cachorro1.comer("uma perna")
cachorro1.unificando()
