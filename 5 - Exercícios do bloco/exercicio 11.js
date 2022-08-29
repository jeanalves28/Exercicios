var salarioBruto = 4040.59;

var salarioLiquido = 0, INSS, IR, valorINSS, valorIR;

if (salarioBruto <= 1556.94)
{
    valorINSS = (salarioBruto * 8) / 100;
    salarioLiquido = salarioBruto - ((salarioBruto * 8) / 100);
    INSS = '8%';
}

    else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92)
    {
        valorINSS = (salarioBruto * 9) / 100;
        salarioLiquido = salarioBruto - ((salarioBruto * 9) / 100);
        INSS = '9%';
    }

        else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82)
        {
            valorINSS = (salarioBruto * 11) / 100;
            salarioLiquido = salarioBruto - ((salarioBruto * 11) / 100);
            INSS = '11%';
        }

            else if (salarioBruto > 5189.82)
            {
                valorINSS = 570.88;
                salarioLiquido = salarioBruto - 570.88;
                INSS = 'valor máximo para este sálario é de 570.88';
            }

if (salarioBruto <= 1903.98)
{
    IR = 'isento de imposto de renda';
    valorIR = 0;
}
    
    else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65)
    {
        IR = '7,5% - 142,80';
        valorIR = ((salarioLiquido * 7.5) / 100) - 142.80;
        salarioLiquido -= ((salarioLiquido * 7.5) / 100) - 142.80;
    }

        else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05)
        {
            IR = '15% - R$: 354,80';
            valorIR = ((salarioLiquido * 15) / 100) - 354.80;
            salarioLiquido -= ((salarioLiquido * 15) / 100) - 354.80;
        }

            else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68)
            {
                IR = '22,5% - R$: 636,13';
                valorIR = ((salarioLiquido * 22.5) / 100) - 636.13;
                salarioLiquido -= ((salarioLiquido * 22.5) / 100) - 636.13;
            }

                else if (salarioBruto > 4664.68)
                {
                    IR = '27,5% - R$: 869.36';
                    valorIR = ((salarioLiquido * 27.5) / 100) - 869.36;
                    salarioLiquido -= ((salarioLiquido * 27.5) / 100) - 869.36;
                }

console.log(`Salário Bruto: ${salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
Salario Líquido: ${salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}

Cálculo do INSS: ${INSS.toLocaleString('pt-br',{minimumFractionDigits: 2})}
Valor do INSS descontado: ${valorINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}

cálculo do IR: ${IR}
valor do IR descontado: ${valorIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);