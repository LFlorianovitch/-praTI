const prompt = require('prompt-sync')();

console.log("MÉDIA SEMESTRAL");
let n1 = parseFloat(prompt("Nota 1 do estudante: "));
let n2 = parseFloat(prompt("Nota 2 do estudante: "));

if (n1 <0 || n2< 0){
    console.log("O valor informado foi um número negativo. Reinsira corretamente a nota!")
}

let media = ((n1+=n2)/2);


if (media >6){
    console.log("PARABÉNS! Você foi aprovado com uma nota de: ", media)
} else if (media <=6){
    console.log("Infelizmente você foi REPROVADO. Estude mais!")
}