const sounds = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const pianoKeys = document.getElementsByTagName('li');
const pianoKeysAudio = document.getElementsByTagName('audio');

for (let i = 0; i < pianoKeys.length; i++) {

	function soundPlay() {
		const player = pianoKeysAudio[i];
		player.src = `sounds/middle/${sounds[i]}`;

		if (event.shiftKey) {
			player.src = `sounds/lower/${sounds[i]}`;	
		};
		if (event.altKey) {
			player.src = `sounds/higher/${sounds[i]}`;	
		};

		player.currentTime = 0; 
		player.play();
	}

	pianoKeys[i].addEventListener('click', soundPlay);
}
