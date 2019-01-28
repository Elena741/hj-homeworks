const slider = document.getElementById('slider');
const imagesList = ['airmax-jump.png', 'airmax-on-foot.png', 'airmax-playground.png', 'airmax-top-view.png', 'airmax.png'];
let index = 1;

slider.src = `i/${imagesList[0]}`;

function show() { 
  
  slider.src = `i/${imagesList[index]}`; 

  if (index < imagesList.length-1) {
    index++;
  } else {
    index = 0;
  };

}

setInterval(show, 5000);
