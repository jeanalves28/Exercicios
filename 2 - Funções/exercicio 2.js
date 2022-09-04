// retorna o índice do maior valor do array

let array = [2, 3, 6, 7, 10, 1];

console.log(maiorElementoArray(array));

function maiorElementoArray(array)
{
    let elemento = Math.max.apply(null, array);

    return array.indexOf(elemento, 0);
}