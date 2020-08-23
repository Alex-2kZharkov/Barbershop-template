let activePhoto = document.querySelector('.active-photo');
let clickedPhoto = document.querySelectorAll('.item-img');

for (let item of clickedPhoto) {
  item.addEventListener('click', () => {
    activePhoto.setAttribute('src', item.getAttribute('src'));
  });
}
