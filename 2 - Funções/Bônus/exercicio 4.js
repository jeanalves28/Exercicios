// imprimindo nome, sobrenome, andar e apartamento do ultimo morador do bloco dois.

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

imprimirUltimoMoradorBlocoDois(moradores);

function imprimirUltimoMoradorBlocoDois(obj)
{
    let aux, quantChaves = [];
    
    quantChaves = Object.keys(obj);

    aux = obj[quantChaves[quantChaves.length-1]];

    aux = aux[aux.length-1];
    
    console.log(`o morador do bloco 2 de nome ${aux.nome} mora no ${aux.andar}º andar, apartamento ${aux.apartamento}`);
}