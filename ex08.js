const prompt = require('prompt-sync')()

let n1 = Math.floor(Math.random()*100);
let n2 = Math.floor(Math.random()*100);

if (n1===n2){
    console.log("Números iguais, valores inválidos")
} else if (n1>n2){
    console.log("N2:", n2, " ", "N1:", n1)
} else if (n2>n1){
    console.log ("N1: ", n1, " ", "N2:", n2)
}