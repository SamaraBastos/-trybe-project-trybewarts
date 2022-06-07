const email = document.getElementById('email');
const psw = document.getElementById('psw');
const logBtn = document.getElementById('login-btn');
const agree = document.getElementById('agreement');
const submitForm = document.getElementById('submit-btn');

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
