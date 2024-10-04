const carroSonho = {
marca: "Koenigsegg",
modelo: "Jesko",
cor: "Branco",
ano: 2020,
quilometragem: 30.000,
preco: 16000000,
ligado: false,
ligar: function(){
this.ligado = true;
console.log("o carro está ligado");

}
};
carroSonho.ligar();
console.log(carroSonho)