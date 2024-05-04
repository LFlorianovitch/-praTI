const prompt=require('prompt-sync')()

let i1 = parseInt(prompt('Informe um numero: '))
let i2 = parseInt(prompt('Informe um numero: '))
let i3 = parseInt(prompt('Informe um numero: '))
let i4 = parseInt(prompt('Informe um numero: '))

console.log(parseInt(i1+=25));
console.log(parseInt(i2*=3));
console.log(parseInt(i3=(12/100)*i3))
console.log(parseInt(i4=i1+=i2+=i3))
