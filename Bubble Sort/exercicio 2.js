var n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(`vetor sem ordenação:
${n}
`);

for (let i = n.length - 1; i >= 0; i--)
{
    for (let j = 0; j < n.length; j++)
    {
        if(n[j] > n[j+1])
        {
            let aux = n[j+1];
            n[j+1] = n[j];
            n[j] = aux;
        }
    }
}

console.log(`vetor com Sort Bubble crescente:
${n}
`);

for (let i = n.length - 1; i >= 0; i--)
{
    for (let j = 0; j < n.length; j++)
    {
        if(n[j] < n[j+1])
        {
            let aux = n[j+1];
            n[j+1] = n[j];
            n[j] = aux;
        }
    }
}

console.log(`vetor com Sort Bubble decrescente:
${n}
`);

const multi = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < (multi.length) - 1; i++)
    multi[i] = multi[i] * multi[i+1];

multi [(multi.length) - 1] = multi[(multi.length) - 1] * 2;

console.log(`multiplicação do elemento interação com o elemento seguinte:
${multi}`);
