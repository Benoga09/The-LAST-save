function adicionandoGiria(){
giria = document.getElementById("giriasInput").value 
resultadoDiv = document.getElementById("resultado")
if (giria){
    novaGiria = document.createElement("p")
    novaGiria.textContent = `Gíria adicionada: ${giria}`
    resultadoDiv.appendChild(novaGiria)
    document.getElementById("giriasInput").value = ''
}else{
  alert("Por favor, insira uma gíria!!!")  
}

}