const leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

let chavesDoObjeto = '';

for (let i in leitor)
{
    if (i == 'nome')
        chavesDoObjeto = `O livro favorito de ${leitor[i]} `;
    
    if (i == 'sobrenome')
        chavesDoObjeto += `${leitor[i]} se chama `;

    if (i == 'livrosFavoritos')
        chavesDoObjeto += `'${leitor.livrosFavoritos[0].titulo}'`;
}

console.log(chavesDoObjeto);