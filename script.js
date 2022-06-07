const login = document.getElementById('form');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const logBtn = document.getElementById('login-btn');

logBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && psw.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
})