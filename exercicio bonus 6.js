// números primos

let nPrimo = 100; // insira o valor do número primo nessa variável

let arrayDePrimo = [];

for (let i = 1; i <= nPrimo; i++)
{
    let count = 0;

    for (let j = nPrimo; j > 0; j--)
    {
        if ((i % j) === 0)
            count++;
    }

    if (count === 2)
        arrayDePrimo.push(i);
}

console.log(`números primos: 

${arrayDePrimo} `);
