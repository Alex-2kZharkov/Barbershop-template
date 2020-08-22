let loginLink = document.querySelector('.login');
let loginWindow = document.querySelector('.login-window');
let closeLoginWindow = document.querySelector('.login-window-close');
let loginField = loginWindow.querySelector('.login-form-login');
let passwordField = loginWindow.querySelector('.login-form-password');
let loginForm = loginWindow.querySelector('.login-window-form');
let overlay = document.querySelector('.overlay');

loginLink.addEventListener('click', (event) => {
  event.preventDefault();

  loginWindow.classList.toggle('login-window-show');
  overlay.classList.add('overlay-show');
  if (localStorage.getItem('login')) {
    loginField.value = localStorage.getItem('login');
    passwordField.focus();
  } else {
    loginField.focus();
  }
});
closeLoginWindow.addEventListener('click', (event) => {
  event.preventDefault();
  loginWindow.classList.remove('login-window-show');
  overlay.classList.remove('overlay-show');
});
window.addEventListener('keydown', (event) => {
  if (
    event.keyCode === 27 &&
    loginWindow.classList.contains('login-window-show')
  ) {
    loginWindow.classList.remove('login-window-show');
    overlay.classList.remove('overlay-show');
  }
});
overlay.addEventListener('click', (event) => {
  loginWindow.classList.remove('login-window-show');
  overlay.classList.remove('overlay-show');
});
loginForm.addEventListener('submit', (event) => {
  if (!loginField.value || !passwordField.value) {
    event.preventDefault();
    console.log('Not all fields');
  } else {
    localStorage.setItem('login', loginField.value);
  }
});
