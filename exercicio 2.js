//inverter palavra

let word = 'trybe', wordInverted = '';

for (let i = word.length - 1; i >= 0; i--)
    wordInverted += word[i];
   

console.log(`palavra invertida: ${wordInverted}`);