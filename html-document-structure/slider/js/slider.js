const container = document.querySelector('.slider');
const nav = container.firstElementChild;
const slides = container.lastElementChild;

const prev = nav.querySelector('[data-action="prev"]');
const next = nav.querySelector('[data-action="next"]');
const first = nav.querySelector('[data-action="first"]');
const last = nav.querySelector('[data-action="last"]');

slides.firstElementChild.classList.add('slide-current');
prev.classList.add('disabled');
first.classList.add('disabled');

first.addEventListener('click', firstClick);
last.addEventListener('click', lastClick);
next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function removeClasses() {

	Array.from(slides.children).forEach(slide => slide.classList.remove('slide-current'));
	Array.from(nav.children).forEach(button => button.classList.remove('disabled'));	

}

function firstClick() {

	removeClasses();
	slides.firstElementChild.classList.add('slide-current');
	prev.classList.add('disabled'); 
	first.classList.add('disabled');  

}

function lastClick() {

	removeClasses();
	slides.lastElementChild.classList.add('slide-current');
	next.classList.add('disabled'); 
	last.classList.add('disabled'); 

}

function nextClick() {
	const currentSlide = slides.querySelector('.slide-current');
    const activatedSlide = currentSlide.nextElementSibling;
    
	if(activatedSlide != null) {
		removeClasses();
	    activatedSlide.classList.add('slide-current');
	
	} else {
		next.classList.add('disabled');
		last.classList.add('disabled');	
	}
}

function prevClick() {
	const currentSlide = slides.querySelector('.slide-current');
	const activatedSlide = currentSlide.previousElementSibling;

	if(currentSlide != null) {
		removeClasses();
		currentSlide.previousElementSibling.classList.add('slide-current');		
	} else {
		prev.classList.add('disabled');
		first.classList.add('disabled'); 	
	} 

}
