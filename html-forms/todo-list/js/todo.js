const listBlock = document.querySelectorAll('.list-block > ul > li > input');
const outputBlock = document.getElementsByTagName('output')[0];

let count = 0;

function result() {

	if(count == listBlock.length) {
		document.querySelector('.list-block').classList.add('complete');
	} else {
		document.querySelector('.list-block').classList.remove('complete');
	}

	outputBlock.value = `${count} из ${listBlock.length}`;	
}

function gou(event) {	
		if (event.target.checked) { 
			count++ ;
			result();
		} else {
			count-- ;
			result();		}
}

for(let block of listBlock) {	

	if (block.checked) {
		count ++;
	}

	outputBlock.value = `${count} из ${listBlock.length}`;
	block.addEventListener('change', gou);

}	
