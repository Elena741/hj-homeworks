/* Данный JS код */
const list = document.getElementById('content');
document.getElementsByTagName('li')[0].remove();

const request = new XMLHttpRequest();
request.open("GET", "https://neto-api.herokuapp.com/book/", true);
request.send();

request.addEventListener("load", onLoad);

function onLoad() {
  const response = JSON.parse(request.responseText);

    for (let i = 0; i < response.length; i++) {

      let newLi = document.createElement('li');

      newLi.innerHTML = `<img src="${response[i].cover.small}">`;
      newLi.dataset.title = response[i].title;
      newLi.dataset.author = response[i].author.name;
      newLi.dataset.info = response[i].info;
      newLi.dataset.price = response[i].price;

      list.appendChild(newLi); 

    }
}

// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
