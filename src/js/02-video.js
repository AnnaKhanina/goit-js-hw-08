import Player  from "@vimeo/player";

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const currentTimeVideo = "videoplayer-current-time";
    const throttle = require(`lodash.throttle`);
    const onPlay = function (data) {
    localStorage.setItem(currentTimeVideo, data.seconds);
    console.log(`${currentTimeVideo} : ${data.seconds}`)
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(currentTimeVideo)) {
    player.setCurrentTime(localStorage.getItem(currentTimeVideo));
   }
