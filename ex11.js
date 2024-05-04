const prompt=require('prompt-sync')()
var teste = true

while (teste != false) {
    let n = parseInt(prompt("Digite um número: "))

if (n>0){

    if (n % 2 == 0){
        console.log(`O número ${n} é par.` )
    } else {
        console.log(`O número ${n}é ímpar.` )
    }
    var teste = true;

} else if ( isNaN(n) || n <= 0){
    console.log("Programa encerrado.")
    var teste = false;
}
} 

//Professor, aqui eu até precisaria de uma auxílio para ver o porquê ao utilizar o VAR funcionou o While, e enquanto eu utilizei o LET não


