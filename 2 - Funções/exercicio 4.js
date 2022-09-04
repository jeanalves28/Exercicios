// retorna o maior elemento string do array

var array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorElementoString(array));

function maiorElementoString (array)
{
    let arrayQuantidade = [];

    for (let elemento of array)
        arrayQuantidade.push(elemento.length);

    let indice = arrayQuantidade.indexOf(Math.max.apply(null, arrayQuantidade), 0);

    return array[indice];
}