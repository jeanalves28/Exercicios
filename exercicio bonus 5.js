// piràmide de asteriscos vazia por dentro

let n = 5; // insira o número de asterisco aqui

for (let i = 1, k = n; i <= n, k > 0; i++, k--)
{
    let ast = '', l = k;

    while(l > 1)
    {
        ast += ' ';
        l--;
    }

    for (let j = i; j > 0; j--)
    {
        if (j === i) ast += '*';
            
            else if (i !== n) ast += ' ';
        
        if (i === n) ast += '*';
    }    

    for (let m = 1; m < i; m++)
    {
        if (m === i - 1) ast += '*';
        
            else if (i !== n) ast += ' ';
        
        if (i === n) ast += '*';
    }

    console.log(ast);
}