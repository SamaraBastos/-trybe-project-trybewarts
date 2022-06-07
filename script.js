const email = document.getElementById('email');
const psw = document.getElementById('psw');
const logBtn = document.getElementById('login-btn');
const agree = document.getElementById('agreement');
const submitForm = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const txtarea = document.getElementById('textarea');

const info = document.getElementById('form-data');
const fName = document.getElementById('input-name');
const lName = document.getElementById('input-lastname');
const formMail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementById('label-family');
const content = document.getElementsByClassName('subject');
const rating = document.getElementById('label-rate');

logBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && psw.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agree.addEventListener('click', (e) => {
  if (e.target.checked) {
    console.log('o');
    submitForm.disabled = false;
  }
});

function countChar() {
  const txtValue = txtarea.value.length;
  counter.innerText = 500 - txtValue;
}
txtarea.addEventListener('keyup', () => {
  countChar();
});

function getContent() {
  
}

let data = {
  Nome: `${fName.value} ${lName.value}`,
  Email: formMail.value,
  Casa: house.value,
  Família: family.value,
  Matérias: ``

}

// submitForm.addEventListener('click', () => {

// })