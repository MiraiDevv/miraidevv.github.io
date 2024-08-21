document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const video = document.getElementById('preloader-video');
    const playButton = document.getElementById('play-button');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const volumeIcon = document.getElementById('volume-icon');
    const muteIcon = document.getElementById('mute-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    const muteToggle = document.getElementById('mute-toggle');
    const playbackSpeed = document.getElementById('playback-speed');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', function() {
        const playPauseButton = document.getElementById('play-pause');
        const video = document.getElementById('preloader-video');

        playPauseButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playPauseButton.classList.remove('paused');
                playPauseButton.classList.add('playing');
            } else {
                video.pause();
                playPauseButton.classList.remove('playing');
                playPauseButton.classList.add('paused');
            }
        });
    });

    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });

    progressBar.addEventListener('input', function() {
        const time = (progressBar.value / 100) * video.duration;
        video.currentTime = time;
    });

    volumeIcon.addEventListener('click', function() {
        video.muted = true;
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    });

    muteIcon.addEventListener('click', function() {
        video.muted = false;
        muteIcon.classList.add('hidden');
        volumeIcon.classList.remove('hidden');
    });

    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value / 100;
    });

    fullscreenToggle.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    muteToggle.addEventListener('click', function() {
        video.muted = !video.muted;
        muteToggle.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    playbackSpeed.addEventListener('change', function() {
        video.playbackRate = playbackSpeed.value;
    });

    video.onloadedmetadata = function() {
        durationDisplay.textContent = formatTime(video.duration);
    };

    video.onended = function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    };

    video.onerror = function() {
        console.error('Error loading video');
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    };

    video.oncanplay = function() {
        console.log('Video can play');
    };

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});