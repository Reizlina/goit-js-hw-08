import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//* ________________Add timeupdate__________________

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    console.log('played the video!');
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000),
);

let time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time);
