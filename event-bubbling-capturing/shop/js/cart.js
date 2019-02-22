'use strict';
document.querySelector('.items-list').addEventListener('click', addButton);

function addButton(event) {

	if(event.target.classList.contains('add-to-cart')) {
		event.preventDefault();		
		addToCart(event.target.dataset);
	}

}
