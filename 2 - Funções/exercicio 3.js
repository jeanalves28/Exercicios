// retorna o índice do menor valor do array

let array = [2, 4, 6, 7, 10, 0, -3];

console.log(menorElementoArray(array));

function menorElementoArray(array)
{
    let elemento = Math.min.apply(null, array);

    return array.indexOf(elemento, 0);
}