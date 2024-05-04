const prompt = require('prompt-sync')();
let resposta = ("S")


while (resposta == "S"){
    console.log ("Apuração de votos");

    let brancos = parseInt(prompt("Informe quantos votos foram brancos: "));
    let nulos = parseInt(prompt("Informe quantos votos foram nulos: "));
    let validos = parseInt(prompt("Informe quantos votos foram validos: "));
    let totVot= parseInt(brancos+nulos+validos);

    if(totVot<0) {
        console.log("O número de votos válidos não é válido.")
    } else {
        console.log("Votos totais: ", totVot);
    }

    if (brancos<0){
        console.log("Valor de votos brancos incorreto.")
    } else {
        console.log("Percentual de votos Brancos: ", (100*brancos)/totVot, "%.")
    }
    if (nulos<0){
        console.log("Valor de votos nulos incorreto.")
    } else {
        console.log("Percentual de votos Brancos: ", (100*nulos)/totVot, "%.")
    }
    if (validos<0){
        console.log("Valor de votos válidos incorreto.")
    } else {
        console.log("Percentual de votos válidos: ", (100*validos)/totVot, "%.")
    }

    resposta = prompt("Você deseja informar outros valores? [S/N]")
    console.log(resposta)
}








