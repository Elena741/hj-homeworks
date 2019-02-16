const contentform = document.querySelector('.contentform');
const main = document.querySelector('#output');
const buttonForm = document.querySelectorAll('button')[0];

const buttonMain = document.querySelectorAll('button')[1];
const output = document.querySelectorAll('output');
const inputs = document.querySelectorAll('input, textarea');

const library = {};

function inputResult(event) {

	library[event.target.name] = event.target.value;

	if(library[event.target.name] === '') {
		delete library[event.target.name];
	}

	buttonForm.disabled = !(Number(Object.keys(library).length) === Number(inputs.length));
	
	for(let out of output) {
		if(event.target.name === out.id) {
		out.value = event.target.value;
		}
	}

}

for(let input of inputs) {

	if(input.name === 'zip') {
		input.type = "number";
	}

	input.addEventListener('change', inputResult);
	
}
function toggleHidden(event) {
	event.preventDefault();
	contentform.classList.toggle('hidden');
	main.classList.toggle('hidden');
}


buttonForm.addEventListener('click', toggleHidden);
buttonMain.addEventListener('click', toggleHidden);
