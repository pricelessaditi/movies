const video1URL = 'https://drive.google.com/file/d/1kuj0veVT4dEnJHNNBuIHEtso9LYSiu98/view?usp=sharing';
const video2URL = 'https://drive.google.com/file/d/1kuj0veVT4dEnJHNNBuIHEtso9LYSiu98/view?usp=sharing';

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
