let activePhoto = document.querySelector('.active-photo');
let clickedPhoto = document.querySelectorAll('.img-container');
let prevActivePhoto = null;

for (let item of clickedPhoto) {
  item.addEventListener('click', () => {
    let image = item.querySelector('.item-img');
    activePhoto.setAttribute('src', image.getAttribute('src'));
    item.classList.add('img-changing-animation');
  });
}
