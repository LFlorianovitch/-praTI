const prompt = require('prompt-sync')()

let compradas = parseInt(prompt("Informe o número de maças compradas: "))


 if (compradas<=0) {
     console.log("Valor inválido");

 } else if (compradas < 12) {
        console.log("O valor total das maças é de R$ ", compradas*=0.30);

 } else if 
 (compradas >= 12){
    console.log ("O valor total das maças é de R$ ", compradas*=0.25);
 }

   

       