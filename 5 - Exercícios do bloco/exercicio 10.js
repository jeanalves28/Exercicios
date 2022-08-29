const valorCusto = 10.5;

const valorVenda = 15;

if (valorCusto > 0 || valorVenda > 0)
{
    const valorCustoTotal = valorCusto + ((valorCusto * 20) / 100);
    
    let lucro = Math.abs(valorCustoTotal - valorVenda);

    lucro = lucro.toFixed(2);
    
    console.log(`    valor total com impostos: ${valorCustoTotal}
    
    lucro: ${lucro}
    
    valor do lucro com mil vendas: ${lucro * 1000}`);
}
    else console.log('numero abaixo de zero');