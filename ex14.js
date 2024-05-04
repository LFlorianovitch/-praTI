
const prompt = require('prompt-sync')();

let contador = 0;
let n;
let soma = 0; 
let media;

while (true) {
    n = parseFloat(prompt("Digite um número: "));
    
   
    if (n === 0 || isNaN(n)) {
        console.log("A média aritmética foi de: ", media = soma/contador)
        break; 
    } else {
        soma += n;
        contador++;
        media = soma/contador;
    }
}

