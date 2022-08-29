let pecaDeXadrez = 'cavalo';

pecaDeXadrez = pecaDeXadrez.toLowerCase();

if (pecaDeXadrez === 'bispo' || pecaDeXadrez === 'bishop')
    console.log('diagonals (diagonais)');

if (pecaDeXadrez === 'torre' || pecaDeXadrez === 'tower')
    console.log('straight (reto)');

if (pecaDeXadrez === 'cavalo' || pecaDeXadrez === 'horse')
    console.log('move in L (movimento em L)');

if (pecaDeXadrez === 'rainha' || pecaDeXadrez === 'queen')
    console.log('diagonals or straight (diagonais ou reto)');;

if (pecaDeXadrez === 'rei' || pecaDeXadrez === 'king')
    console.log('one square diagonal or straight (uma casa diagonal ou reto)');

if (pecaDeXadrez === 'peão' || pecaDeXadrez === 'peao' || pecaDeXadrez === 'pawn')
    console.log('forward one square (para frente uma casa)');