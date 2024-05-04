const prompt = require('prompt-sync')();
let n = ""
let p = ""
let notaTotal = 0
let pesoTotal = 0
let mediaPonderada = 0


while (true) {

    n = parseFloat(prompt("Digite a nota do aluno: "));



    if (n != 0 || isNaN(n)) {

        p = parseInt(prompt("Digite o peso da nota: "));

        notaTotal = (notaTotal + (n * p));

        pesoTotal = pesoTotal + p;

        mediaPonderada = notaTotal / pesoTotal;

    } else {
        console.log(`A média ponderada do aluno é: ${mediaPonderada}`);
        break
    }
}



