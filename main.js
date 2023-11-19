const video1URL = 'videos/video1.mp4';
const video2URL = 'videos/video2.mp4';

document.addEventListener('DOMContentLoaded', function () {
    const popcorn1 = Popcorn('#video1');
    const popcorn2 = Popcorn('#video2');

    popcorn1.autoplay(true);
    popcorn2.autoplay(true);

    popcorn1.on('timeupdate', function () {
        popcorn2.currentTime(popcorn1.currentTime());
    });

    popcorn2.on('timeupdate', function () {
        popcorn1.currentTime(popcorn2.currentTime());
    });

    popcorn1.src(video1URL, 'video/mp4');
    popcorn2.src(video2URL, 'video/mp4');
});
