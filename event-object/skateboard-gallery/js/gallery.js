const showCase = document.getElementsByClassName('gallery-view')[0];
const links = document.getElementsByTagName('a');

for(let link of links) {

	function fotoShow(event) {
		document.getElementsByClassName('gallery-current')[0].classList.remove('gallery-current');
		event.preventDefault();
		showCase.src = link.href;
		link.classList.add('gallery-current');

	}
	
	link.addEventListener('click', fotoShow);	
}
