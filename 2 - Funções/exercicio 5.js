// retorna o elemento que mais repete no array

var array = [2, 3, 2, 5, 8, 2, 3], arrayCount = [];

console.log(numerosMaisRepetidos(array,arrayCount));

function numerosMaisRepetidos(n, arrayCount)
{
    for (let i in n)
    {
        let count = 0;

        for (let elemento of n)
        {
            if (n[i] == elemento)
            count++;
        }

        arrayCount.push(count);
    }

    return n[arrayCount.indexOf(Math.max.apply(null, arrayCount), 0)];
}