// buscando números pares de uma array dentro de outra array

const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

var pares = [];

for (let i in vector)
{
    let arr = vector[i];
    
    searchEven(arr,pares);
}

console.log(pares);

function searchEven(arr,arrEven)
{
    for(let elemento of arr)
    {
        if ((elemento % 2) === 0)
            arrEven.push(elemento);
    }

    return arrEven;
}