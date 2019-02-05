const buttons = document.getElementsByTagName('li');

for (const btn of buttons) {
	const player = btn.getElementsByTagName('audio')[0];
	btn.onclick = () => {
		player.currentTime = 0;
		player.play();
	}
}