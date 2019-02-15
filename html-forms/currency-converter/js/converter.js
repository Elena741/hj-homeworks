const container = document.getElementById('content');
const loader = document.getElementById('loader');

let input = document.getElementById('source');
let result = document.getElementById('result');
let from = document.getElementById('from');
let to = document.getElementById('to');

let request = new XMLHttpRequest();

request.addEventListener("loadstart", onLoadStart);
request.addEventListener("loadend", onLoadEnd);
request.addEventListener("load", onLoad);

request.open("GET", "https://neto-api.herokuapp.com/currency", true);
request.send();

function onLoadStart() {
  loader.classList.remove('hidden');
}

function onLoadEnd() {
  loader.classList.add('hidden');
}

function resulted() {
	result.value = (input.value * from.value / to.value).toFixed(2);
}

function onLoad() {
  container.classList.remove('hidden');
  const response = JSON.parse(request.responseText);

	for(let item of response) {

		let optionFrom = document.createElement('option');
		let optionTo = document.createElement('option');

		optionFrom.name = optionTo.name = item.code;
		optionFrom.value = optionTo.value = item.value;
		optionFrom.innerHTML = optionTo.innerHTML = item.code;

		from.appendChild(optionFrom);
		to.appendChild(optionTo);

	}

	resulted();
}

input.addEventListener('input', resulted);
from.addEventListener('change', resulted);
to.addEventListener('change', resulted);
