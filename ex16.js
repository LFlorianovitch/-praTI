const prompt = require('prompt-sync')()

let count = 0;
let numer = 100;

while (count < 50) {
    if(numer%1===0 && numer%numer===0 && (numer%2!==0 && numer%3!==0 && numer%5!==0 && numer%7!==0 && numer%11!==0)){
        console.log(numer);
        count++;
    }
        numer++; 
}