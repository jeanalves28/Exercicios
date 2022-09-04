// transcrever números romanos em números naturais (dada a atual conjuntura dos caracteres alfanuméricos de alguns sistemas operacionais, só é possível transcrever as letras alfabéticas dos números romanos de 1 à 3999 em números naturais)

const valorRomano = ''; //o valor romano é uma string que retorna um número natural não-nulo (valores romanos ilegíveis retornam 0)

console.log(romanoEmNatural(valorRomano));

function romanoEmNatural(romano)
{
    romano = romano.split('');

    for (let i in romano)
        romano[i] = romano[i].toLowerCase();
    
    return enumerarRomano(romano);
}

function enumerarRomano(romano)
{
    let classificacao = [];

    for (let i in romano)
    {
        if (romano[i] == 'i')
            classificacao[i] = 1;
        
        if (romano[i] == 'v')
            classificacao[i] = 5;

        if (romano[i] == 'x')
            classificacao[i] = 10;
        
        if (romano[i] == 'l')
            classificacao[i] = 50;

        if (romano[i] == 'c')
            classificacao[i] = 100;

        if (romano[i] == 'd')
            classificacao[i] = 500;

        if (romano[i] == 'm')
            classificacao[i] = 1000;
    }

    return contagemNosPadroes(classificacao);
}

function romanoInvalido(ar)
{
    let count = 0;

    for (let elemento of ar)
    {
        if (elemento === 1)
            count++;
        if (count == 4)
        return true;
    }
    
    count = 0;

    for (let elemento of ar)
    {
        if (elemento === 5)
            count++;
        if (count == 2)
        return true;
    }
    
    count = 0;

    for (let elemento of ar)
    {
        if (elemento === 10)
            count++;
        if (count == 5)
        return true;
    }

    count = 0;

    for (let elemento of ar)
    {
        if (elemento === 50)
            count++;
        if (count == 2)
        return true;
    }

    count = 0;

    for (let elemento of ar)
    {
        if (elemento === 100)
            count++;
        if (count == 4)
        return true;
    }

    count = 0;

    for (let elemento of ar)
    {
        if (elemento === 500)
            count++;
        if (count == 2)
        return true;
    }

    count = 0;
    
    for (let elemento of ar)
    {
        if (elemento === 1000)
            count++;
        if (count == 5)
        return true;
    }

    count = 0;

    return false;
}

function contagemNosPadroes(arrayNatural)
{
    let numeroNatural = 0;

    if(!romanoInvalido(arrayNatural))
    {
       if (arrayNatural.indexOf(1000) != -1 && arrayNatural[arrayNatural.indexOf(1000) + 1] == 1000 && arrayNatural[arrayNatural.indexOf(1000) + 2] == 1000)
            numeroNatural += 3000;

            else if (arrayNatural.indexOf(1000) != -1 && arrayNatural[arrayNatural.indexOf(1000) + 1] == 1000)
                numeroNatural += 2000;

                else if (arrayNatural.indexOf(1000) != -1 && arrayNatural[arrayNatural.indexOf(1000) - 1] != 100)
                    numeroNatural += 1000;

        if (arrayNatural.indexOf(500) != -1 && arrayNatural[arrayNatural.indexOf(500) - 1] == 100)
            numeroNatural += 400;
            
            else if (arrayNatural.indexOf(500) != -1)
                numeroNatural += 500;

        if (arrayNatural.indexOf(100) != -1 && arrayNatural[arrayNatural.indexOf(100) + 1] == 1000)
            numeroNatural += 900;
        
            else if (arrayNatural.indexOf(100) != -1 && arrayNatural[arrayNatural.indexOf(100) + 1] == 100 && arrayNatural[arrayNatural.indexOf(100) + 2] == 100)
                numeroNatural += 300;

                else if (arrayNatural.indexOf(100) != -1 && arrayNatural[arrayNatural.indexOf(100) + 1] == 100)
                    numeroNatural += 200;
                
                    else if (arrayNatural.indexOf(100) != -1 && arrayNatural[arrayNatural.indexOf(100) - 1] != 10 && arrayNatural[arrayNatural.indexOf(500) - 1] != 100)
                        numeroNatural += 100;
        
        if (arrayNatural[arrayNatural.indexOf(50) - 1] == 10)
            numeroNatural += 40;
        
            else if (arrayNatural.indexOf(50) != -1 && arrayNatural[arrayNatural.indexOf(50) - 1] != 10)
                numeroNatural += 50;
        
        if (arrayNatural.indexOf(10) != -1 && arrayNatural[arrayNatural.indexOf(10) + 1] == 100)
            numeroNatural += 90;

            else if (arrayNatural.indexOf(10) != -1 && arrayNatural[arrayNatural.indexOf(10) + 1] == 10 && arrayNatural[arrayNatural.indexOf(10) + 2] == 10)
                numeroNatural += 30;

                else if (arrayNatural.indexOf(10) != -1 && arrayNatural[arrayNatural.indexOf(10) + 1] == 10)
                    numeroNatural += 20;
                    
                    else if (arrayNatural.indexOf(10) != -1 && arrayNatural[arrayNatural.indexOf(10) - 1] != 1 && arrayNatural[arrayNatural.indexOf(10) + 1] != 50 && arrayNatural[arrayNatural.indexOf(10) + 1] != 100)
                        numeroNatural += 10;

        if (arrayNatural.indexOf(1) != -1 && arrayNatural[arrayNatural.indexOf(1) + 1] == 10)
            numeroNatural += 9;

        if (arrayNatural.indexOf(5) != -1 && arrayNatural[arrayNatural.indexOf(5) - 1] == 1)
            numeroNatural += 4;

            else if (arrayNatural.indexOf(5) != -1 && arrayNatural[arrayNatural.indexOf(5) - 1] != 1)
                numeroNatural += 5;
                
        if (arrayNatural[arrayNatural.length - 1] == 1 && arrayNatural[arrayNatural.length - 2] == 1 && arrayNatural[arrayNatural.length - 3] == 1)
            numeroNatural += 3;

            else if (arrayNatural[arrayNatural.length - 1] == 1 && arrayNatural[arrayNatural.length - 2] == 1)
                numeroNatural += 2

                else if(arrayNatural.indexOf(1) != -1 && arrayNatural[arrayNatural.indexOf(1) + 1] !== 5 && arrayNatural[arrayNatural.indexOf(1) + 1] !== 10)
                    numeroNatural += 1;
    }
    
    return numeroNatural;
}