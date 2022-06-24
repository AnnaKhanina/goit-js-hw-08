// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);


// player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then().catch();

// player.on('timeupdate', throttle((data) => {
//     localStorage.setItem("videoplayer-current-time", data.seconds);
// }, 1000));

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');    
const player = new Player(iframe);

player.on('timeupdate', throttle(clickPlay, 1000));
player.on('ended', ended);


function clickPlay( { seconds } ){
    const currentTimeValue = JSON.stringify(seconds);
    localStorage.setItem(LOCALSTORAGE_KEY, currentTimeValue);
    };

function ended(){
    player.setCurrentTime(0).then(function(){})
    };

const playFromCurrentTime = function (){
    const getCurrentStorageTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    player.setCurrentTime(getCurrentStorageTime).then(function(){});
    };

    playFromCurrentTime();
