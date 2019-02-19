const contents = document.querySelector('.tabs-content');
const tabsContents = document.querySelector('.tabs-content').children;
const nav = document.querySelector('.tabs-nav');

Array.from(tabsContents).forEach(tab => tab.classList.add('hidden'));
document.querySelector('.tabs-content').firstElementChild.classList.remove('hidden');
document.querySelector('.tabs-content').firstElementChild.classList.add('ui-tabs-active');

function clickTab(event) {

	for(let tab of tabsContents) {
		if(tab.getAttribute('data-tab-title') === event.target.textContent) {
			Array.from(tabsContents).forEach(tab => tab.classList.add('hidden'));
			Array.from(tabsContents).forEach(tab => tab.classList.remove('ui-tabs-active'));
			Array.from(nav.children).forEach(link => link.firstElementChild.classList.remove('ui-tabs-active'));
			tab.classList.remove('hidden');
			tab.classList.add('ui-tabs-active');
			
			event.target.classList.add('ui-tabs-active');
		}
	}

}

for(let i=0; i < tabsContents.length; i++) {
let clone = nav.firstElementChild.cloneNode(true);
clone.firstElementChild.textContent = tabsContents[i].getAttribute('data-tab-title');
clone.firstElementChild.classList.add(tabsContents[i].getAttribute('data-tab-icon'));
clone.addEventListener('click', clickTab);
nav.appendChild(clone);
}

nav.firstElementChild.remove();
