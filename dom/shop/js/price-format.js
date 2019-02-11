function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const buttons = document.getElementsByClassName('add');
const price = document.getElementById('cart-total-price');
const count = document.getElementById('cart-count');
let amountCounter = 0;
let itemCounter = 0;

for(let i = 0; i < buttons.length; i++) {

	function logEvent(event) {
		const dataPrice = event.currentTarget.getAttribute('data-price');
		amountCounter += Number(dataPrice);
		itemCounter += 1;
		
		price.innerHTML = `<span>${getPriceFormatted(amountCounter)}</span>`;
		count.innerHTML = `<span>${itemCounter}</span>`;
	}

	buttons[i].addEventListener('click', logEvent);
}
