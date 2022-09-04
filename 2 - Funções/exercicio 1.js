// verifica se é palíndromo

let word = 'arara'; // insira a palavra para ser verificada aqui

console.log(verificaPalidromo(word));

function verificaPalidromo(word)
{
    let aux = '';

    for (let i = word.length - 1; i >= 0; i--)
        aux += word[i];

    if (aux == word)
        return true;

        else return false;
}