const buttonSubmit = document.getElementById('submit-form');
const buttonClear = document.createElement('button');

buttonSubmit.addEventListener('click',e => {
    const inputAgreement = document.getElementById('agree');

    if (inputAgreement.checked == false)
        e.preventDefault();
});

buttonClear.innerText = 'Limpar dados';
buttonClear.className = 'button-style';

document.body.appendChild(buttonClear);

buttonClear.addEventListener('click', () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const destiny = document.querySelectorAll('#destiny-favorite option');
    const data = document.getElementById('dataTrip');
    const textArea = document.getElementById('texto-justificativa');
    const inputYes = document.getElementById('yes-receive');
    const inputNo = document.getElementById('no-receive');
    const inputAgreement = document.getElementById('agree');

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    
    destiny.forEach(opt => {
        if (opt.selected == true)
        {
            destiny[0].selected = true;
            return;
        }
    });

    data.value = '';
    textArea.value = '';
    inputYes.checked = false;
    inputNo.checked = false;
    inputAgreement.checked = false;
});
