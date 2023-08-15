console.log("Spotify is OG Welcome in Spotify")

let idx = 1;
let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let songCoverImg = document.querySelector('#song-cover img');
let songNameLink = document.getElementById('song-name');
let artistNameLink = document.getElementById('artist-name');
let currentTimeElement = document.getElementById('currentTime');
let songDurationElement = document.getElementById('songDuration');
let volumeBtn = document.getElementById("volumeBtn");
let volumeBar = document.getElementById("volumeBar");


audioElement.addEventListener('canplay', () => {
    currentTimeElement.innerText = formatTime(Math.floor(audioElement.currentTime));
    if (!isNaN(audioElement.duration)) {
        songDurationElement.innerText = formatTime(Math.floor(audioElement.duration));
    } else {
        songDurationElement.innerText = "00:00";
    }
    console.log(currentTimeElement.innerText, songDurationElement.innerText);
});

function updateDocumentTitle(songName) {
    document.title = `${songName} - Spotify`;
}


// -------------------- Play / Pause event handeling --------------------
let isPlaying = false;
function playSong() {
    updateDocumentTitle(songs[idx - 1].songName);
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        isPlaying = true;
        document.getElementById('play-icon').classList.remove('fa-play');
        document.getElementById('play-icon').classList.add('fa-pause');
        updateSongIcon();
    } else {
        audioElement.pause()
        isPlaying = false;
        document.getElementById('play-icon').classList.remove('fa-pause');
        document.getElementById('play-icon').classList.add('fa-play');
        makeAllplay()
    }
    console.log(isPlaying)
}

masterPlay.addEventListener('click', playSong);
window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 32){
        e.preventDefault()
        playSong();
    }
});



// -------------------- Progressbar connecting with Song -------------------- 
let isProgressBarDragging = false;
audioElement.addEventListener('timeupdate', () => {
    if (!isProgressBarDragging) {
        var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress >= 0 ? progress : 0;
        // ---------------- best mistake -----------------
        // console.log(audioElement.currentTime, audioElement.duration)
        // console.log(progress);
        // ---------------- best mistake -----------------
        currentTimeElement.innerText = formatTime(Math.floor(audioElement.currentTime));
        songDurationElement.innerText = formatTime(Math.floor(audioElement.duration));
    }
    if(audioElement.currentTime == audioElement.duration){
        if(idx >= songs.length) idx = 1;
        else idx += 1;
        changeSong(idx);
        updateSongIcon()
    }
});


// -------------------- Progressbar with seeking -------------------- 
myProgressBar.addEventListener('input', (e) => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    console.log(e.target.value);
});

myProgressBar.addEventListener('change', () => {
    isProgressBarDragging = false;
});

volumeBar.addEventListener('input', (e)=>{
    let sound = e.target.value / 100;
    audioElement.volume = sound;
});





// -------------------- Changing Song Play Icons -------------------- 
const makeAllplay = () => {
    Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=> {
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')
    });    
};


// ------------ Updating Song Icon ------------
function updateSongIcon(){
    makeAllplay();
    const playIconElement = document.getElementById(`${idx}`);
    if(playIconElement){
        playIconElement.classList.remove('fa-play')
        playIconElement.classList.add('fa-pause')
    }
}





// -------------------- Changing Songs -------------------- 
function changeSong(idx){
    audioElement.src = `assets/songs/${idx}.mp3`;
    audioElement.currentTime = 0
    audioElement.play();
    document.getElementById('play-icon').classList.add('fa-pause');
    document.getElementById('play-icon').classList.remove('fa-play');
    updateSongInfo(songs[idx-1].coverPath, songs[idx-1].songName, songs[idx-1].artistData)
    updateDocumentTitle(songs[idx - 1].songName);
}

Array.from(document.getElementsByClassName('songPlayItem')).forEach( (element)=> {
    element.addEventListener('click', (e)=>{
        currentIndex = idx;
        idx = parseInt(e.target.id);
        if(currentIndex !== idx){
            makeAllplay()
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-pause')
            // ------------ changing a song ------------
            changeSong(idx);
        } else {
            makeAllplay()
            playSong();
        }
    });
});







// ----------------- prev / next song -----------------
nextButton.addEventListener('click' , () => {
    if(idx >= songs.length) idx = 1;
    else idx += 1;
    changeSong(idx);
    updateSongIcon()
});

previousButton.addEventListener('click' , () => {
    if(idx <= 1) idx = songs.length;
    else idx -= 1;
    changeSong(idx);
    updateSongIcon()
});


// ------------------------ change Song info on song change ------------------------
function updateSongInfo(coverSrc, songName, artistData){
    songCoverImg.src = coverSrc;
    songNameLink.innerText = songName;
    let names = artistData.map(artists => artists.artistName).join(', ');
    artistNameLink.innerText = names;
}





// ------------- changing Time According to Song ---------------
function formatTime(seconds){
    const minutes = parseInt(seconds / 60);
    const remain = seconds % 60;
    return `${minutes.toString().padStart(2,'0')}:${remain.toString().padStart(2,'0')}`;
}

// -------------- volume btn audio mute unmute -----------
let isMuted = false
volumeBtn.addEventListener("click", () => {
    isMuted = !isMuted
    if(isMuted){
        volumeBar.value = 0;
        audioElement.volume = 0
    } else {
        volumeBar.value = 100;
        audioElement.volume = 1
    }
})