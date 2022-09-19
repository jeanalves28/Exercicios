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
  
  // Escreva seu código abaixo.

function decemberDaysList() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const tagUl = document.getElementById('days');

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
