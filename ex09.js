const prompt = require('prompt-sync')()
let resposta = "S"

while (resposta != "N") {
    let codigo = parseInt(prompt("Digite o código do produto: "));

    console.log("Código informado: ", codigo)

    switch (codigo) {
        case 1:
            console.log("Região Sul");
            break;
        case 2:
            console.log("Região Norte");
            break

        case 3:
            console.log("Região Leste");
            break

        case 4:
            console.log("Região Oeste");
            break

        case 5: case 6:
            console.log("Região Mordeste");
            break

        case 7: case 8: case 9:
            console.log("Região Sudeste");
            break

        default:

            if (codigo > 20 && codigo <= 24 || codigo <= 0) {
                console.log("Código não cadastrado")

            } else if (codigo >= 10 && codigo <= 20) {

                console.log("Região Centro-Oeste");

            } else if (codigo >= 25 && codigo <= 50) {

                console.log("Região Nordeste");

            } else if (isNaN(codigo)) {
                console.log("Código informado não é um número válido.")
            } else {
                console.log("O produto é importado.")
            }



    }

    resposta = prompt("Você deseja verificar outro código? [S/N]").toLocaleUpperCase();

    while (!(resposta == "S" || resposta == "N")){
        resposta = prompt("Digite apenas S ou N: ").toUpperCase()
    }
}