//função para gerar um adjetivo de qualidade
function gerarAdjetivo (nome){
//lista de adjetivos para os dias ruins
const adjetivos = ["forte","carinhoso","esforçado","leal","corajoso","otimista","unico","o melhor","educado","SHOW DE BOLA","justo","honesto"]
//gerar um indice aleatorio para escolher um adjetivo
const indiceAleatorio = Math.floor(Math.random() * adjetivos.length)
//Math.floor arredonda o numero para baixo
//Math.random() randomizar
return nome + " você é " + adjetivos[indiceAleatorio]

}
// Exemplo de uso ou chamada
console.log(gerarAdjetivo("Benicio"))