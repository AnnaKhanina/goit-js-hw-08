import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.setCurrentTime(localStorage.getItem(LOCALSTORAGE)).then().catch();

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));