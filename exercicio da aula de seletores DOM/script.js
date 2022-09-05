document.querySelector('header').style.backgroundColor = 'MediumSeaGreen';

document.querySelector('header').style.padding = '30px';

document.querySelector('.emergency-tasks').style.backgroundColor = 'LightSalmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#FFD700';

const primeiraSecaoh3 = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < primeiraSecaoh3.length; i++)
{
    primeiraSecaoh3[i].style.backgroundColor = 'Purple';
    primeiraSecaoh3[i].style.fontSize = '18px';
    primeiraSecaoh3[i].style.padding = '10px';
}

const segundaSecaoh3 = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < segundaSecaoh3.length; i++)
{
    segundaSecaoh3[i].style.backgroundColor = '#1B1B1B';
    segundaSecaoh3[i].style.fontSize = '17.6px';
    segundaSecaoh3[i].style.padding = '10px';
}

document.querySelector('footer').style.backgroundColor = '#001E00'

document.querySelector('footer').style.position = 'relative';

document.querySelector('footer').style.top = '218px';