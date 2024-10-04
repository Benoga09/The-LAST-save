//Insira o número n
let n = 1478

//Inicializando as variáveis para armazenar os primeiros númerosda sequência 
let fibonacci = [] //Array para armazenar a sequência de fibonacci
let a = 0 //Primeiro número da sequência
let b = 1//segundo número da sequência
let contador = 0//Para controlar quantos números já foram gerados
//Usando while para calcular a sequência
while (contador < n){
//Adicionando o número atual da sequência ao array
fibonacci.push(a)//Adiciona o valor inicial 
//Atualizando os valores de a e b para os próximos números da sequência
let temp = a//Armazenando o valor atual de a em uma variável temporária
a = b//Atualizando o a para ser o próximo número b
b = temp + b//Atualizando para ser a soma dos dois últimos números (anterior atual)
//Incrementando
contador ++
}
console.log(`os primeiros ${n} números da sequência de fibonacci são: ${fibonacci.join(",")}`)