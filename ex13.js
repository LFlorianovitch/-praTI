const prompt=require('prompt-sync')()
let n = parseInt(prompt("Digite um valor a ser multiplicado: "));

let contador = 1

for (contador = 1; contador <= n; contador++){
    console.log(`${contador} x ${n}`, contador*n)
}