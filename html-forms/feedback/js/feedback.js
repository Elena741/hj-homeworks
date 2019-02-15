const contentform = document.querySelector('.contentform');
const main = document.querySelector('#output');
const buttonForm = document.querySelectorAll('button')[0];

const buttonMain = document.querySelectorAll('button')[1];
const output = document.querySelectorAll('output');
const inputs = document.querySelectorAll('input, textarea');

const library = {};

function see(event) {

	library[event.target.name] = event.target.value;


	buttonForm.disabled = !(Number(Object.keys(library).length) === Number(inputs.length));

}

for(let input of inputs) {

	if(input.name === 'zip') {
		input.type = "number";
	}

	input.addEventListener('change', see);
	
}
function toggleHidden(event) {
	event.preventDefault();
	contentform.classList.toggle('hidden');
	main.classList.toggle('hidden');
}


buttonForm.addEventListener('click', toggleHidden);
buttonMain.addEventListener('click', toggleHidden);

for(let out of output) {
	out.value = library['out.id'];
	console.log(out.value);
}