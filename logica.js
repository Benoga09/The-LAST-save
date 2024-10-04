//Função que solicita os números ao usuário e calcula a soma
function solicitarNumeros(){
let soma = 0 //Variável para guardar a soma dos números inseridos
let numero //Variável para guardar o número isnserido pelo usuário
let index = 1 //Índice para indicar a ordem das entradas do usuário
//Fazendo o loop do...while que se continua até o usuário inserir o número 0 (condição pare)
do {
//Solicitando ao usuário que insira um número, com a indicação do índice
numero = parseInt(prompt("Insira um número" + index + "(0 para sair): "))
//Verificando se o valor inserido é um número válido
if(!isNaN(numero)){
soma += numero //Somando o número inserido ao total
index++ //Incrementa o índice para a próxima entrada


}else{
    //Caso o valor inserido não seja um número, exibe um alerta ao usuário
    alert("Por favor, insira um número válido cpx!")
}


}while(numero !== 0) //O loop para quando o cpx insere o '0'
//exibindo a soma dos números no elemento HTML com id 'resultado'
document.getElementById("resultado").innerHTML = "A soma dos números é:" + soma
}