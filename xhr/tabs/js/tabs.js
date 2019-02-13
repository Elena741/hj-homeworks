const container = document.getElementById('content');
let link = document.getElementsByClassName('active')[0].href;
const tabs = document.querySelectorAll('nav > a');
const preloader = document.getElementById("preloader");

function onLoadStart() {
  preloader.classList.remove('hidden');
}

function onLoadEnd() {
  preloader.classList.add('hidden');
}

let xhr = new XMLHttpRequest();

xhr.addEventListener("loadstart", onLoadStart);
xhr.addEventListener("loadend", onLoadEnd);
xhr.addEventListener("load", onLoad);

xhr.open("GET", link, true);
xhr.send();

function onLoad() {
  container.innerHTML = xhr.responseText;
}

for (let tab of tabs) {

  function onClick() {
    event.preventDefault();
    let link = tab.href;
    xhr.open("GET", link, true);
    xhr.send();
    container.innerHTML = xhr.responseText;
    document.getElementsByClassName('active')[0].classList.remove('active');
    tab.classList.add('active');
  }

  tab.addEventListener('click', onClick);
}
