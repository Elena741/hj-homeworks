const prevButton = document.getElementById('prevPhoto');
const nextButton = document.getElementById('nextPhoto');
const currentPhoto = document.getElementById('currentPhoto');
const photoList = ['breuer-building.jpg', 'guggenheim-museum.jpg', 'headquarters.jpg', 'IAC.jpg', 'new-museum.jpg'];
let index = 0;

currentPhoto.src = `i/${photoList[0]}`;

prevButton.onclick = function () {
  index <= 0 ? index = photoList.length - 1 : index-- ;
  currentPhoto.src = `i/${photoList[index]}`;
}

nextButton.onclick = function () {
  index >= photoList.length - 1 ? index = 0 : index++ ;
  currentPhoto.src = `i/${photoList[index]}`;
}
