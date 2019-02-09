addEventListener("keydown", 
	function(event) {
		if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
		    document.getElementsByTagName('nav')[0].classList.toggle('visible');
		}
	}
)

const secret = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ';
const chars = [];

function handler (event) {
	chars.push(event.code);
	let str = chars.join('');

	if(str.indexOf(secret) != -1) {
		document.getElementsByClassName('secret')[0].classList.add('visible');
	}
}

addEventListener('keypress', handler);
