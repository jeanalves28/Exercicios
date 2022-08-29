let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],soma = 0, media;

for (let i = 0; i < numbers.length; i++)
    soma += numbers[i];

console.log('valores do vetor :');

console.log(numbers);

console.log(`soma total: ${soma}`);

media = soma / numbers.length;

console.log(`média aritmética: ${media}`);

if (soma > 20) console.log('valor maior que 20');

    else console.log('valor menor ou igual a 20');

for (let count, i = 0; i < numbers.length; i++)
{
    count = 0;
    for (let j = 0; j < numbers.length; j++)
    {
        if(numbers[i] >= numbers[j])
            count++;
    }

    if (count === numbers.length)
    {
        console.log(`maior valor do array é ${numbers[i]}`);
        break;
    }
}

let impares = 0;

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] % 2 !== 0)
        impares++;
}

if(impares !== 0)
    console.log(`tem ${impares} número(s) ímpar(es)`);

    else console.log('nenhum valor ímpar encontrado');


for (let count, i = 0; i < numbers.length; i++)
{
    count = 0;
    for (let j = 0; j < numbers.length; j++)
    {
        if(numbers[i] <= numbers[j])
            count++;
    }
    
    if (count === numbers.length)
    {
        console.log(`menor valor do array é ${numbers[i]}
        `);
        break;
    }
}

let array = [];

for (let i = 1; i <= 25; i++)
    array.push(i);

console.log(array);

let divisao = [];

for (let i = 0; i < array.length; i++)
    divisao[i] = array[i] / 2;

console.log(`divisao do array 1 a 25 por 2: 
[ ${divisao} ]`);