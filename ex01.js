const prompt=require("prompt-sync")();

let celsius = parseFloat(prompt("Informe a temperatura em graus Celsius: "));
let f = (celsius*1.8+32)

if (f <= 1) {
    console.log ("O valor correspondente ao valor informado é: ", f, " fahrenheit.");
} else {
    console.log ("O valor correspondente ao valor informado é: ", f, " fahrenheits.");
}
let resposta = prompt("Deseja consultar a temperatura de novo?[S/N]")

