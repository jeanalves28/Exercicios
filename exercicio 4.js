// maior número primo

let nPrimo = 50; // insira o valor do número primo nessa variável

let arrayDePrimo = [];

for (let i = nPrimo; i > 0; i--)
{
    let count = 0;

    for (let j = 1; j <= i; j++)
    {
        if ((i % j) === 0)
            count++;
    }

    if (count === 2)
        arrayDePrimo.push(i);
}

console.log(`O maior número primo é ${Math.max.apply(null, arrayDePrimo)}`);