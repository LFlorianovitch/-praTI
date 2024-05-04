const prompt = require('prompt-sync')();

let n1= parseFloat(prompt("Informe o primeiro lado do triângulo: "));
let n2= parseFloat(prompt("Informe o segundo lado do triângulo: "));
let n3= parseFloat(prompt("Informe o terceiro lado do triângulo: "));
let triangulo 

if (n1<n2+n3 && n2<n1+n3 && n3 < n1+n2 && n1,n2,n3==0){
    triangulo = 1
    if (n1==n2 || n1==n3 || n2==n3){
        console.log ("Os valores informados correspondem a um Triângulo Isósceles")

    }  else if(n1 != n2 || n2!=n3){
        console.log("Os valores informados correspondem a um Triângulo Escaleno")

    } else if(n1 == n2 && n2==n3){
        console.log("Os valores informados correspondem a um Triângulo Escaleno")
    }
} else {
    triangulo = 0
    console.log("Os valores informados não correspondem a um triângulo")
}



 
