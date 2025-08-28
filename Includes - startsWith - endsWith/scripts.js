//Includes, startsWith, endsWith


//Includes =  Verifica a existencia de um elemento:

let nomes = ["Matheus", "Lucas", "Jose"]
console.log(nomes.includes("Maria"));
if (nomes.includes("Maria")){
    console.log("Achado")
} else {
    console.log("Não encontrado")
}

//startsWith = Verifica se o conteúdo começa com o trecho mostrado:
let nome = "Matheus";
console.log("O nome Começa com o trecho informado? ",nome.startsWith("Mat"))

console.log("O nome finaliza com o trecho informado? ", nome.endsWith("p"))