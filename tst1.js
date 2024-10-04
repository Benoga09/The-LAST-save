const retangulo = {
largura: 5,
altura: 10,
cor: 'azul'
}
const novoRetangulo = {
...retangulo,
cor: 'vermelho',
material: 'Fibra de vidro'
}
console.log('Objeto Original:', retangulo);
console.log('Novo objeto com espalhamento:', novoRetangulo)