function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
decemberDaysList();
buttonHoliday('Feriados');
adicionarCorDeFundoNosFeriados();
buttonSextaFeira('Sexta-feira');
exibirTextoNasSextas();
aumentarTamanhoDosDias();
adicionarTarefas('cozinhar');
adicionarLegendaColorida('Lime');
selecionarTarefa();
atribuirCorDeTarefaAoDia();
botaoAdicionarTarefa();

  // Escreva seu código abaixo.

function decemberDaysList() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < decemberDaysList.length; i ++) {
    const tagLi = document.createElement('li');
    const ulDays = document.getElementById('days');
    const day = decemberDaysList[i];

    tagLi.innerText = day;
    tagLi.classList.add('day');

    if (day == 24 || day == 25 || day == 31)
      tagLi.classList.add('holiday');

    if (day == 4 || day == 11 || day == 18 || day == 25)
      tagLi.classList.add('friday');

    ulDays.appendChild(tagLi);
  }
}

function buttonHoliday(holiday) {
  const tagButton = document.createElement('button');
  const tagDivButton = document.querySelector('.buttons-container');
  
  tagButton.innerHTML = holiday;

  tagButton.setAttribute('id', 'btn-holiday');

  tagDivButton.appendChild(tagButton);
}

function adicionarCorDeFundoNosFeriados() {
  const buttonHoliday = document.getElementById('btn-holiday');

  buttonHoliday.addEventListener('click',() => {
    const holidays = document.querySelectorAll('.holiday');
    const bgColor = [];

    for (let i = 0; i < holidays.length; i++) {
      const aux = window.getComputedStyle(holidays[i]).backgroundColor;
      bgColor.push(aux);
    }

    for (let i = 0; i < holidays.length; i++) {
      if (bgColor[i] !== 'rgb(0, 255, 255)')
        holidays[i].style.backgroundColor = 'Aqua';
        
        else holidays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  });
}

function buttonSextaFeira(weekend) {
  const tagButton = document.createElement('button');
  const tagPai = document.querySelector('.buttons-container');

  tagButton.innerHTML = weekend;

  tagButton.setAttribute('id', 'btn-friday');

  tagPai.appendChild(tagButton);
}

function exibirTextoNasSextas() {
  const buttonSextaFeira = document.getElementById('btn-friday');

  buttonSextaFeira.addEventListener('click',() => {
    const dayFriday = document.getElementsByClassName('friday');
    
    for (let i = 0;i < dayFriday.length; i++) {
      const tagLi = document.createElement('li');

      tagLi.innerText = 'Dia de Sexta';
      tagLi.className = 'day';
      tagLi.setAttribute('id', 'btn-friday');

      if (window.getComputedStyle(dayFriday[i]).display != 'none') {
        dayFriday[i].insertAdjacentElement('afterend',tagLi);
        dayFriday[i].style.display = 'none';
      }
        
        else {
          dayFriday[i].style.display = 'inline-block';
          dayFriday[i].parentNode.removeChild(dayFriday[i].nextElementSibling);
        } 
    }

  });
}

function aumentarTamanhoDosDias() {
  const li = document.querySelectorAll('.day');

  li.forEach( i => {
    i.addEventListener('mouseover',(e) => {
      e.target.style.fontSize = '27px';
    });
  });

  li.forEach( i => {
    i.addEventListener('mouseout',(e) => {
      e.target.style.fontSize = '20px';
    });
  });
}

function adicionarTarefas(string) {
  const tagSpan = document.createElement('span');
  const pai = document.querySelector('.my-tasks');

  tagSpan.innerText = string;

  pai.appendChild(tagSpan);
}

function adicionarLegendaColorida(bgColor) {
  const tagDiv = document.createElement('div');
  const pai = document.querySelector('.my-tasks');

  tagDiv.className = 'task';

  tagDiv.style.backgroundColor = bgColor;

  pai.appendChild(tagDiv);
}

function selecionarTarefa() {
  const tagDiv = document.querySelector('.task');
  
  tagDiv.addEventListener('click', e => {
    e.target.classList.toggle('selected');
  });
}

function atribuirCorDeTarefaAoDia() {
  const days = document.querySelectorAll('.day');

  days.forEach( d => {
    d.addEventListener('click', e => {
      const tarefaSelecionada = document.querySelector('.task');
      const listaDeClass = tarefaSelecionada.classList;

      listaDeClass.forEach ( c => {
        if (c == 'selected') {
          const color = window.getComputedStyle(tarefaSelecionada).backgroundColor;
          
          if (window.getComputedStyle(e.target).color != color)
            e.target.style.color = color;

            else e.target.style.color = 'rgb(119,119,119)';
        }
      });
    });
  });
}

function botaoAdicionarTarefa() {
  const buttonAdd = document.getElementById('btn-add');
  const inputTask = document.getElementById('task-input');
  

  buttonAdd.addEventListener('click', (e) => {  
    const chars = inputTask.value;

    if (chars.length != 0) {
      const tagUl = document.querySelector('.task-list');
      const tagLi = document.createElement('li');

      tagLi.innerText = chars;

      tagUl.appendChild(tagLi);

      inputTask.value = '';
    }

      else window.alert('sem tarefa digitada.');
  });

  inputTask.addEventListener('keyup', e => {
    const chars = inputTask.value;
    
    if (e.key == 'Enter') {
      if (chars.length != 0) {
        const tagUl = document.querySelector('.task-list');
        const tagLi = document.createElement('li');

        tagLi.innerText = chars;

        tagUl.appendChild(tagLi);

        inputTask.value = '';
      }

        else window.alert('sem tarefa digitada.');
    }
  });
}

