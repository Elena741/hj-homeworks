const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const currentTrack = mediaplayer.getElementsByTagName('audio')[0];
const controls = document.getElementsByClassName('controls')[0];

const title = controls.getElementsByClassName('title')[0];
const prevButton = controls.getElementsByClassName('back')[0];
const nextButton = controls.getElementsByClassName('next')[0];
const stopButton = controls.getElementsByClassName('stop')[0];
const playAction  = controls.getElementsByClassName('playstate')[0];
const playButton = playAction.getElementsByClassName('fa fa-play')[0];
const pauseButton = playAction.getElementsByClassName('fa fa-pause')[0];

const trackList = ['LA Chill Tour.mp3', 'This is it band.mp3', 'LA Fusion Jam.mp3'];
let index = 0;

currentTrack.src = `mp3/${trackList[0]}`;
title.title = trackList[0];

playButton.onclick = () => {
	currentTrack.play();
	mediaplayer.classList.toggle('play');
};

pauseButton.onclick = () => {
	currentTrack.pause();
	mediaplayer.classList.toggle('play');
};

function stopPlayer() {
	if(mediaplayer.classList.contains('play')) {
		mediaplayer.classList.toggle('play');
	}
};

stopButton.onclick = () => {
	currentTrack.pause();
	currentTrack.currentTime = 0;

	stopPlayer();
};

prevButton.onclick = function () {
    index <= 0 ? index = trackList.length - 1 : index-- ;
    currentTrack.src = `mp3/${trackList[index]}`;
    title.title = trackList[index];

    stopPlayer();
};

nextButton.onclick = function () {	
	index >= trackList.length - 1 ? index = 0 : index++ ;
	currentTrack.src = `mp3/${trackList[index]}`;
	title.title = trackList[index];

	stopPlayer();
};