const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const inputs = document.querySelectorAll('input');

function clickInput(event) {
	if (event.target.checked === true) {
		done.appendChild(event.target.parentElement);
	} else if(event.target.checked === false) {
		undone.appendChild(event.target.parentElement);
	}
}

Array.from(inputs).forEach(input => input.addEventListener('click', clickInput));
