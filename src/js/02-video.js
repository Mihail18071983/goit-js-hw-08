import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const ifFrameRef = document.querySelector('#vimeo-player');
const player = new Player(ifFrameRef);

player.on('timeupdate', throttle(onTimeUpdate,5000));

function onTimeUpdate(e) {
  console.log(e);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
}

const getContentOfLocalStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
player.setCurrentTime(getContentOfLocalStorage.seconds);
