// imprimindo o nome e sobrenome de todos os moradores de todos os blocos

const moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

imprimirNomesSobrenomesDosBlocos(moradores);

function imprimirNomesSobrenomesDosBlocos(obj)
{
    for (let bloco in obj)
    {
       let arrayAux = (obj[bloco]);

       for (let objeto of arrayAux)
       {
            let objAux = objeto;

            console.log(`${bloco} nome: ${objAux.nome} sobrenome: ${objAux.sobrenome}
            `);
       }
    }
}