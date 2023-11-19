const video1URL = 'https://drive.google.com/your_video1_url';
const video2URL = 'https://drive.google.com/your_video2_url';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Popcorn instances
    const popcorn1 = Popcorn('#video1');
    const popcorn2 = Popcorn('#video2');

    // Set up synchronized playback
    popcorn1.autoplay(true);
    popcorn2.autoplay(true);

    popcorn1.on('timeupdate', function () {
        popcorn2.currentTime(popcorn1.currentTime());
    });

    popcorn2.on('timeupdate', function () {
        popcorn1.currentTime(popcorn2.currentTime());
    });

    // Load Google Drive videos
    popcorn1.src(video1URL, 'video/mp4');
    popcorn2.src(video2URL, 'video/mp4');
});
