const sounds = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const pianoKeys = document.getElementsByTagName('li');
const pianoKeysAudio = document.getElementsByTagName('audio');

for (let i = 0; i < pianoKeys.length; i++) {

	function soundPlay() {
		const piano = document.getElementsByTagName('ul')[0];
		const player = pianoKeysAudio[i];
		
		function removeClass() {
			piano.classList.remove('middle', 'lower', 'higher');
		}

		if (!event.shiftKey && !event.altKey) {
			player.src = `sounds/lower/${sounds[i]}`;
			removeClass();
			piano.classList.add('middle');	
		} else if (event.shiftKey) {
			player.src = `sounds/lower/${sounds[i]}`;
			removeClass();
			piano.classList.add('lower');	
		} else if (event.altKey) {
			player.src = `sounds/higher/${sounds[i]}`;
			removeClass()
			piano.classList.add('higher');	
		};

		player.currentTime = 0; 
		player.play();
	}

	pianoKeys[i].addEventListener('click', soundPlay);
	
}
