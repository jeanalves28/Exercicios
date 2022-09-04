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
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
};

let chavesConcat;

for (let i in leitor)
{
    if (i == 'nome')
        chavesConcat = `${leitor[i]} tem `;

    if (i == 'livrosFavoritos')
        chavesConcat += `${leitor[i].length} livros favoritos`;
}

console.log(chavesConcat);