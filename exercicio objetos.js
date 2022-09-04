// manipulando objetos

let nome = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    primeiroNome: nome,
    ultimoNome: lastName,
    idade: age,
    medalhas: {medals},
    melhoresDoMundo: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log(`A jogadora ${player.primeiroNome.concat(' ',player.ultimoNome)} tem ${player.idade} anos de idade e foi eleita a melhor do mundo por ${player.melhoresDoMundo.length} vezes.`);