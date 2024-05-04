const prompt = require('prompt-sync')();

console.log("MÉDIA SEMESTRAL");
let n1 = parseFloat(prompt("Nota 1 do estudante: "));
let n2 = parseFloat(prompt("Nota 2 do estudante: "));

let media = ((n1+=n2)/2);

if (media>=6){
    console.log("PARABÉNS! Você foi aprovado com uma nota de: ", media)
}