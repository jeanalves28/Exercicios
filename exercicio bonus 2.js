// triângulo retângulo de asteriscos de n números

let n = 5; //insira o número de asterisco aqui

for (let i = 1; i <= n; i++)
{
    let ast = '';

    for (let j = i; j > 0; j--)
        ast += '*';
    
    console.log(ast);
}