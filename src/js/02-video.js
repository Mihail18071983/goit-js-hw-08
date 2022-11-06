import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const ifFrameRef = document.querySelector('#vimeo-player');
const player = new Player(ifFrameRef);

player.on('timeupdate', throttle(onTimeUpdate,1000));

function onTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
}

const getContentOfLocalStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(getContentOfLocalStorage.seconds);



window.addEventListener('touchstart', function(e) {
  e.preventDefault();
}, {passive:false}); // <-- mark the event listerner as NOT passive