// Declaring variables
const descript = document.getElementById('musicside'); // Gettting the music side
const musicBox = document.getElementById('box'); // musicBox
const audioHold = document.querySelector('#audio');
const videoHold = document.querySelector('#video');
const playList = document.getElementsByClassName('played');
const tracks = ['./aud/Ali-Gatie-What-If-I-Told-You-That-I-Love-You-via-Naijafinix.com_.mp3',
    './aud/Bebe-Rexha-In-The-Name-Of-Love-via-Naijafinix.com_.mp3',
    './aud/Lauren-Daigle-You-Say-Lyrics.mp3',
    './aud/03 Heat Waves - (SongsLover.com).mp3',
    './aud/Falz - Fvck You (Kizz Daniel Cover) (NetNaija.com).mp3'
];
const seeker = document.getElementsByClassName('slider');
const totalTime = document.getElementsByClassName('totalTime');
const currentTime = document.getElementsByClassName('currentTime');
const timers = document.getElementById('timers');
const side = document.getElementsByClassName('side');



for (let t = 0; t < totalTime.length; t++) {
    totalTime[t].innerHTML = '0:00';
}
for (let c = 0; c < currentTime.length; c++) {
    currentTime[c].innerHTML = '0:00';
}


for (let i = 0; i < playList.length; i++) {
    playList[i].addEventListener('click', function () {
        audioHold.innerHTML = '';
        videoHold.innerHTML = '';
        audio = document.createElement('audio');
        source = document.createElement('source');
        source.src = tracks[i];
        audio.appendChild(source);
        audioHold.appendChild(audio);
        video = document.createElement('video');
        video.loop = true;
        video.classList.add('myVideo');
        video.setAttribute('type', 'video/mp4');
        vsource = document.createElement('source');
        vsource.src = './vid/vecteezy-audio-spectrum-line-wave-background-4k-animation-voice-7118555-617_3pYTzjrt.mp4';
        video.appendChild(vsource);
        videoHold.appendChild(video)
        for (let v = 0; v < side.length; v++) {
            if (v == i) {
                side[v].prepend(videoHold);
            }
        }
        playList[i].classList.toggle('fa-circle-pause');
        playList[i].classList.toggle('fa-circle-play');
        if (this.classList.contains('fa-circle-pause')) {
            audio.play();
            video.play()
        } else {
            audio.pause();
            video.pause()
        }


        setTimeout(function () {
            for (let t = 0; t < totalTime.length; t++) {
                totalTime[t].innerHTML == '00:00';
                // if (t == i) {
                    if (totalTime[t].innerHTML = 'NaN:NaN') {
                        totalTime[t].innerHTML = '0:00';
                    }
                // }
            }
        }, 50)




        for (let p = 0; p < seeker.length; p++) {
            audio.addEventListener('timeupdate', function () {
                const percent = audio.currentTime / audio.duration * 100;
                if (p == i) {
                    console.log(audio.currentTime);
                    seeker[p].value = percent
                    for (let t = 0; t < totalTime.length; t++) {
                        if (t == i) {
                            let duration = audio.duration;
                            let minutes = Math.floor(duration / 60);
                            let seconds = Math.floor(duration - minutes * 60);
                            totalTime[t].innerHTML = `${minutes}:${seconds}`;
                        }
                    }
                    for (let c = 0; c < currentTime.length; c++) {
                        if (c == i) {
                            let current = audio.currentTime;
                            let minutes = Math.floor(current / 60);
                            let seconds = Math.floor(current - minutes * 60);
                            currentTime[c].innerHTML = `${minutes}:${seconds}`;
                        }
                    }
                    if (audio.currentTime === 0) {
                        seeker[p].value = 0
                    }
                }
            });

            seeker[p].addEventListener('input', (e) => {
                if (p == i) {
                    audio.currentTime = e.target.value / 100 * audio.duration;
                    console.log(audio.duration)
                }
            });

            for (let j = 0; j < playList.length; j++) {
                audio.addEventListener('ended', () => {
                    playList[j].classList.remove('fa-circle-pause');
                    playList[j].classList.add('fa-circle-play');
                    videoHold.innerHTML = '';
                    seeker[p].value = 0
                });
                if (j !== i) {
                    playList[j].classList.remove('fa-circle-pause');
                    playList[j].classList.add('fa-circle-play');
                }
            }

        }
    });


    for (let t = 0; t < totalTime.length; t++) {
        audio.addEventListener('timeupdate', function () {
            window.addEventListener('load', () => {
                if (t == i) {
                    console.log(audio.duration);
                }
            });
        });

    }


}




