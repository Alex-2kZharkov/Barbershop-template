let loginLink = document.querySelector('.login');
let loginWindow = document.querySelector('.login-window');
let closeLoginWindow = document.querySelector('.login-window-close');
let loginField = loginWindow.querySelector('.login-form-login');
let passwordField = loginWindow.querySelector('.login-form-password');
let loginForm = loginWindow.querySelector('.login-window-form');
let overlay = document.querySelector('.overlay');
let galleryPhotoCounter = 1;
const GALLERY_LIMIT = 3;
let galleryNext = document.querySelector('.gallery-next');
let galleryPrev = document.querySelector('.gallery-prev');
let galleryPhoto = document.querySelector('.gallery-content img');
let locationBtn = document.querySelector('.location');
let map = document.querySelector('.map-container');
let mapClose = map.querySelector('.map-close');


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
window.addEventListener('load', () => {
  galleryPrev.classList.add('blocked-btn');
});
galleryNext.addEventListener('click', (event) => {
  ++galleryPhotoCounter;
  if (galleryPhotoCounter === GALLERY_LIMIT) {
    galleryNext.classList.add('blocked-btn');
  } else if (galleryPhotoCounter === 2) {
    galleryPrev.classList.remove('blocked-btn');
  }
  galleryPhoto.setAttribute(
    'src',
    `img/gallery-image-${galleryPhotoCounter}.jpg`
  );
});
galleryPrev.addEventListener('click', () => {
  galleryPhotoCounter--;
  if (galleryPhotoCounter === 1) {
    galleryPrev.classList.add('blocked-btn');
    galleryNext.classList.remove('blocked-btn');
  }
  galleryPhoto.setAttribute(
    'src',
    `img/gallery-image-${galleryPhotoCounter}.jpg`
  );
});

locationBtn.addEventListener('click', () => {
  map.classList.add('map-show');
});
mapClose.addEventListener('click', () => {
  map.classList.remove('map-show');
});

