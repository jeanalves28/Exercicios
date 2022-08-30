// triângulo invertido para o lado direito

let n = 5; //insira o número de asteriscos aqui

for (let i = 1, k = n; i <= n, k > 0; i++, k--)
{
    let ast = '', l = k;

    while(l > 1)
    {
        ast += ' ';
        l--;
    }

    for (let j = i; j > 0; j--)
        ast += '*';

    console.log(ast);
}