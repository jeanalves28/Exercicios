// retorna a somatória de 1 até n

var n = 5;

console.log(somatoria(n));

function somatoria(n)
{
    let somas = 0;

    for (let i = n; i > 0; i--)
        somas += i;

    return somas;
}