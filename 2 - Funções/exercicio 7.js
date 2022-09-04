// verifica se a string ending é igual ao final de word

var string = 'trybe';

var ending = 'be';

console.log(verificarFimDeString(string, ending));

function verificarFimDeString(string, ending)
{
    string = string.split('');

    string = string.reverse();

    ending = ending.split('');
    
    ending = ending.reverse();

    for (let i in ending)
    {
        if (string[i] !== ending[i])
            return false;
    }

    return true;
}